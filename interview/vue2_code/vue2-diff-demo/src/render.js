import { ChildrenFlags, VNodeFlags } from "./flags"
import { patchData } from './patchData'

export default function render(vnode, container) {
    // vnode: tag data children -> document.createElement DOM -> appendChild container
    // 判断是否是第一次挂载 挂载，更新，替换
    const prevVNode = container.vnode
    // console.log(container);
    if (prevVNode == null) {
        // 没有旧的VNode，使用mount函数挂载全新的VNode
        mount(vnode, container)
        // 将新的VNode添加到container.vnode属性下，这样下一次渲染时旧的VNode就存在了
        container.vnode = vnode
        // console.log(vnode);
    } else {
        // 更新
        if (vnode) {
            // vnode prevVNode diff 有旧的VNode，则调用patch函数打补丁
            // console.log(vnode);
            patch(prevVNode, vnode, container)
            // 更新container.vnode
            container.vnode = vnode
        } else {
            // 删除 有旧的VNode但没有新的VNode，移除DOM
            container.removeChild(prevVNode.el)
            container.vnode = null
        }
    }
}

function mount(vnode, container, isSVG, refNode) {
    const { flags } = vnode
    if (flags & VNodeFlags.ELEMENT) {
        mountElement(vnode, container, isSVG, refNode)
    } else if (flags & VNodeFlags.COMPONENT) {
        mountComponent(vnode, container, isSVG)
    } else if (flags & VNodeFlags.TEXT) {
        mountText(vnode, container)
    } else if (flags & VNodeFlags.FRAGMENT) {
        mountFragment(vnode, container, isSVG)
    } else if (flags & VNodeFlags.PORTAL) {
        mountPortal(vnode, container, isSVG)
    }
}
function mountElement(vnode, container, isSVG, refNode) {
    isSVG = isSVG || vnode.flags & VNodeFlags.ELEMENT_SVG
    // console.log(isSVG);
    const el = isSVG ? document.createElmentNS('http://www.w3.org/2000/svg', vnode.tag)
        : document.createElement(vnode.tag)
    vnode.el = el
    const data = vnode.data
    if (data) {
        for (let key in data) {
            patchData(el, key, null, data[key])
        }
        // console.log(data);
        // for (let key in data) {
        //     // console.log(key);
        //     switch (key) {
        //         case 'style':
        //             for (let k in data.style) {
        //                 el.style[k] = data.style[k]
        //                 // console.log(el.style[k]);
        //             }
        //             break;
        //         case 'class':
        //             if (isSVG) {
        //                 el.setAttribute('class', data[key])
        //             } else {
        //                 // to primitive
        //                 el.className = data[key]
        //                 // console.log(data[key]);
        //             }
        //         default:
        //             const domPropsRE = /\[A-Z]|^(?:value|checked|selected|muted)$/;
        //             if (domPropsRE.test(key)) {
        //                 // key属于dom原生的属性
        //                 el[key] = data[key]
        //             } else {
        //                 // key不属于dom原生的属性
        //                 el.setAttribute(key, data[key])
        //             }
        //             break;
        //     }
        // }
    }
    const childrenFlags = vnode.childrenFlags
    const children = vnode.children
    if (childrenFlags !== ChildrenFlags.NO_CHILDREN) {
        if (childrenFlags & ChildrenFlags.SINGLE_VNODE) {
            mount(children, el, isSVG)
        } else if (childrenFlags & ChildrenFlags.MULTIPLE_VNODES) {
            for (let i = 0, len = children.length; i < len; i++) {
                mount(children[i], el, isSVG)
            }
        }
    }
    // console.log(refNode);
    refNode ? container.insertBefore(el, refNode) : container.appendChild(el)
}

function mountText(vnode, container) {
    const el = document.createTextNode(vnode.children)
    vnode.el = el
    container.appendChild(el)
}

function mountPortal(vnode, container) {
    const { tag, children, childFlags } = vnode
    // 获取挂载点
    const target = typeof tag === 'string' ? document.querySelector(tag) : tag
    if (childFlags & ChildrenFlags.SINGLE_VNODE) {
        // 将 children 挂在到 target 上，而非 container
        mount(children, target)
    } else if (childFlags & ChildrenFlags.MULTIPLE_VNODES) {
        for (let i = 0; i < children.length; i++) {
            // 将 children 挂在到 target 上，而非 container
            mount(children[i], target)
        }
    }
    // 占位的空文本节点
    const placeholder = createTextVNode('')
    // 将该节点挂载到 container 中
    mountText(placeholder, container, null)
    // el 属性引用该节点
    vnode.el = placeholder.el
}

function mountFragment(vnode, container, isSVG) {
    // 拿到 children 和 childFlags
    const { children, childFlags } = vnode
    switch (childFlags) {
        case ChildrenFlags.SINGLE_VNODE:
            // 如果是单个子节点，则直接调用 mount
            mount(children, container, isSVG)
            break
        case ChildrenFlags.NO_CHILDREN:
            // 如果没有子节点，等价于挂载空片段，会创建一个空的文本节点占位
            const placeholder = createTextVNode('')
            mountText(placeholder, container)
            break
        default:
            // 多个子节点，遍历挂载之
            for (let i = 0; i < children.length; i++) {
                mount(children[i], container, isSVG)
            }
    }
}

function mountComponent(vnode, container, isSVG) {
    if (vnode.flags & VNodeFlags.COMPONENT_STATEFUL) {
        mountStatefulComponent(vnode, container, isSVG)
    } else {
        mountFunctionalComponent(vnode, container, isSVG)
    }
}

function mountStatefulComponent(vnode, container, isSVG) {
    // 创建组件实例
    const instance = (vnode.children = new vnode.tag())
    // 初始化 props
    instance.$props = vnode.data
    instance._update = function () {
        if (instance._mounted) {
            // 更新
            // 1、拿到旧的 VNode
            const prevVNode = instance.$vnode
            // 2、重渲染新的 VNode
            const nextVNode = (instance.$vnode = instance.render())
            // 3、patch 更新
            patch(prevVNode, nextVNode, prevVNode.el.parentNode)
            // 4、更新 vnode.el 和 $el
            instance.$el = vnode.el = instance.$vnode.el
        } else {
            // 1、渲染VNode
            instance.$vnode = instance.render()
            // 2、挂载
            mount(instance.$vnode, container, isSVG)
            // 3、组件已挂载的标识
            instance._mounted = true
            // 4、el 属性值 和 组件实例的 $el 属性都引用组件的根DOM元素
            instance.$el = vnode.el = instance.$vnode.el
            // 5、调用 mounted 钩子
            instance.mounted && instance.mounted()
        }
    }
    instance._update()
}

function mountFunctionalComponent(vnode, container, isSVG) {
    vnode.handle = {
        prev: null,
        next: vnode,
        container,
        update: () => {
            if (vnode.handle.prev) {
                // 更新
                // prevVNode 是旧的组件VNode，nextVNode 是新的组件VNode
                const prevVNode = vnode.handle.prev
                const nextVNode = vnode.handle.next
                // prevTree 是组件产出的旧的 VNode
                const prevTree = prevVNode.children
                // nextTree 是组件产出的新的 VNode
                const props = nextVNode.data
                const nextTree = (nextVNode.children = nextVNode.tag(props))
                // 调用 patch 函数更新
                patch(prevTree, nextTree, vnode.handle.container)
            } else {
                // 获取 props
                const props = vnode.data
                // 获取 VNode
                const $vnode = (vnode.children = vnode.tag(props))
                // 挂载
                mount($vnode, container, isSVG)
                // el 元素引用该组件的根元素
                vnode.el = $vnode.el
            }
        }
    }
    // 立即调用 vnode.handle.update 完成初次挂载
    vnode.handle.update()
}

function patch(prevVNode, nextVNode, container) {
    const nextFlags = nextVNode.flags
    const prevFlags = prevVNode.flags
    // console.log(prevVNode, nextVNode);
    if (prevFlags !== nextFlags) {
        // 替换
        replaceVNode(prevVNode, nextVNode, container)
    } else if (nextFlags & VNodeFlags.ELEMENT) {
        patchElement(prevVNode, nextVNode, container)
    } else if (nextFlags & VNodeFlags.COMPONENT) {
        patchComponent(prevVNode, nextVNode, container)
    } else if (nextFlags & VNodeFlags.TEXT) {
        patchText(prevVNode, nextVNode)
    } else if (nextFlags & VNodeFlags.FRAGMENT) {
        patchFragment(prevVNode, nextVNode, container)
    } else if (nextFlags & VNodeFlags.PORTAL) {
        patchPortal(prevVNode, nextVNode)
    }
}

function replaceVNode(prevVNode, nextVNode, container) {
    container.removeChild(prevVNode.el)
    if (prevVNode.flags & VNodeFlags.COMPONENT_STATEFUL_NORMAL) {
        const instance = prevVNode.children
        instance.unmounted && instance.unmounted()
    }
    mount(nextVNode, container)
}

function patchElement(prevVNode, nextVNode, container) {
    // tag div -> p
    // 新旧VNode标签不一样
    if (prevVNode.tag !== nextVNode.tag) {
        replaceVNode(prevVNode, nextVNode, container)
        return
    }
    // 让nextVNode在没有挂载前就拿到元素
    const el = nextVNode.el = prevVNode.el
    // console.log(el);
    const prevData = prevVNode.data
    const nextData = nextVNode.data
    // if (nextData) {
    //     for (let key in nextData) {
    //         // const prevValue = prevData[key]
    //         // const nextValue = nextData[key]
    //         // console.log(key, prevValue, nextValue);
    //         switch (key) {
    //             case 'style':
    //                 for (let k in nextData.style) {
    //                     el.style[k] = nextData.style[k]
    //                     // console.log(el.style[k]);
    //                 }
    //                 for (let k in prevData.style) {
    //                     if (!nextData.style.hasOwnProperty(k)) {
    //                         el.style[k] = ''
    //                     }
    //                 }
    //             default:
    //                 break
    //         }
    //     }
    // } 
    // 各种情况 封装
    if (nextData) {
        for (let key in nextData) {
            const prevValue = prevData[key]
            const nextValue = nextData[key]
            // console.log(key, prevValue, nextValue);
            patchData(el, key, prevValue, nextValue)
        }
    }
    if (prevData) {
        for (let key in prevData) {
            const prevValue = prevData[key]
            if (prevValue && !nextData.hasOwnProperty(key)) {
                patchData(el, key, prevValue, null)
            }

        }
    }
    // 调用 patchChildren 函数递归的更新子节点
    patchChildren(
        prevVNode.childFlags, // 旧的 VNode 子节点的类型
        nextVNode.childFlags, // 新的 VNode 子节点的类型
        prevVNode.children, // 旧的 VNode 子节点
        nextVNode.children, // 新的 VNode 子节点
        el // 当前标签元素，即这些子节点的父节点
    )
}

// 4*4=16种情况
function patchChildren(prevChildFlags, nextChildFlags, prevChildren,
    nextChildren, container) {
    // console.log(prevChildFlags, nextChildFlags, prevChildren,
    //     nextChildren, container);
    switch (prevChildFlags) {
        // 旧的 children 是单个子节点，会执行该 case 语句块
        case ChildrenFlags.SINGLE_VNODE:
            switch (nextChildFlags) {
                case ChildrenFlags.SINGLE_VNODE:
                    // 新的 children 也是单个子节点时，会执行该 case 语句块
                    patch(prevChildren, nextChildren, container)
                    break
                case ChildrenFlags.NO_CHILDREN:
                    // 新的 children 中没有子节点时，会执行该 case 语句块
                    container.removeChild(prevChildren.el)
                    break
                default:
                    // 但新的 children 中有多个子节点时，会执行该 case 语句块
                    container.removeChild(prevChildren.el)
                    for (let i = 0; i < nextChildren.length; i++) {
                        mount(nextChildren[i], container)
                    }
                    break
            }
            break
        // 旧的 children 中没有子节点时，会执行该 case 语句块
        case ChildrenFlags.NO_CHILDREN:
            switch (nextChildFlags) {
                case ChildrenFlags.SINGLE_VNODE:
                    // 新的 children 也是单个子节点时，会执行该 case 语句块
                    mount(nextChildren, container)
                    break
                case ChildrenFlags.NO_CHILDREN:
                    // 新的 children 中没有子节点时，会执行该 case 语句块
                    break
                default:
                    // 但新的 children 中有多个子节点时，会执行该 case 语句块
                    for (let i = 0; i < nextChildren.length; i++) {
                        mount(nextChildren[i], container)
                    }
                    break
            }
            break
        // 旧的 children 中有多个子节点时，会执行该 case 语句块 核心diff算法
        default:
            switch (nextChildFlags) {
                case ChildrenFlags.SINGLE_VNODE:
                    // 新的 children 也是单个子节点时，会执行该 case 语句块
                    for (let i = 0; i < prevChildren.length; i++) {
                        container.removeChild(prevChildren[i].el)
                    }
                    mount(nextChildren, container)
                    break
                case ChildrenFlags.NO_CHILDREN:
                    // 新的 children 中没有子节点时，会执行该 case 语句块
                    for (let i = 0; i < prevChildren.length; i++) {
                        container.removeChild(prevChildren[i].el)
                    }
                    break
                default:
                    // 但新的 children 中有多个子节点时，会执行该 case 语句块
                    let lastIndex = 0  // ? 最大索引值
                    // nextChildren 最后的真实DOM 应该的样子？
                    for (let i = 0; i < nextChildren.length; i++) {
                        const nextVNode = nextChildren[i]
                        find = false // 新节点在旧的节点里面吗？ 
                        //   有， patch 复用这个节点  prevChildren.el
                        // console.log('1111')
                        for (let j = 0; j < prevChildren.length; j++) {
                            const prevVNode = prevChildren[j]
                            if (nextVNode.key === prevVNode.key) {
                                find = true
                                patch(prevVNode, nextVNode, container)
                                if (j < lastIndex) {
                                    // 需要移动
                                    // nextSibling 下一个元素
                                    const refNode = nextChildren[i - 1].el.nextSibling
                                    // 将prevVNode.el放到refNode前面
                                    container.insertBefore(prevVNode.el, refNode)
                                    break
                                } else {
                                    // console.log('eeee')
                                    // 更新 lastIndex
                                    lastIndex = j
                                }
                            }
                        }
                        if (!find) {
                            // 挂载新节点 参照节点
                            const refNode =
                                i - 1 < 0
                                    ? prevChildren[0].el
                                    : nextChildren[i - 1].el.nextSibling
                            mount(nextVNode, container, false, refNode)
                        }
                    }
                    // 移除已经不存在的节点
                    for (let i = 0; i < prevChildren.length; i++) {
                        const prevVNode = prevChildren[i]
                        const has = nextChildren.find(
                            nextVNode => nextVNode.key === prevVNode.key)
                        if (!has) {
                            // 移除
                            container.removeChild(prevVNode.el)
                        }
                    }
                    break
            }
            break
    }
}

function patchText(prevVNode, nextVNode) {
    // 拿到文本节点 el，同时让 nextVNode.el 指向该文本节点
    const el = (nextVNode.el = prevVNode.el)
    // 只有当新旧文本内容不一致时才有必要更新
    if (nextVNode.children !== prevVNode.children) {
        el.nodeValue = nextVNode.children
    }
}

function patchFragment(prevVNode, nextVNode, container) {
    // 直接调用 patchChildren 函数更新 新旧片段的子节点即可
    patchChildren(
        prevVNode.childFlags, // 旧片段的子节点类型
        nextVNode.childFlags, // 新片段的子节点类型
        prevVNode.children, // 旧片段的子节点
        nextVNode.children, // 新片段的子节点
        container
    )
    switch (nextVNode.childFlags) {
        case ChildrenFlags.SINGLE_VNODE:
            nextVNode.el = nextVNode.children.el
            break
        case ChildrenFlags.NO_CHILDREN:
            nextVNode.el = prevVNode.el
            break
        default:
            nextVNode.el = nextVNode.children[0].el
    }
}

function patchPortal(prevVNode, nextVNode) {
    patchChildren(
        prevVNode.childFlags,
        nextVNode.childFlags,
        prevVNode.children,
        nextVNode.children,
        prevVNode.tag // 注意 container 是旧的 container
    )
    // 让 nextVNode.el 指向 prevVNode.el
    nextVNode.el = prevVNode.el
    // 如果新旧容器不同，才需要搬运
    if (nextVNode.tag !== prevVNode.tag) {
        // 获取新的容器元素，即挂载目标
        const container =
            typeof nextVNode.tag === 'string'
                ? document.querySelector(nextVNode.tag)
                : nextVNode.tag
        switch (nextVNode.childFlags) {
            case ChildrenFlags.SINGLE_VNODE:
                // 如果新的 Portal 是单个子节点，就把该节点搬运到新容器中
                container.appendChild(nextVNode.children.el)
                break
            case ChildrenFlags.NO_CHILDREN:
                // 新的 Portal 没有子节点，不需要搬运
                break
            default:
                // 如果新的 Portal 是多个子节点，遍历逐个将它们搬运到新容器中
                for (let i = 0; i < nextVNode.children.length; i++) {
                    container.appendChild(nextVNode.children[i].el)
                }
                break
        }
    }
}

function patchComponent(prevVNode, nextVNode, container) {
    if (nextVNode.tag !== prevVNode.tag) {
        replaceVNode(prevVNode, nextVNode, container)
    } else if (nextVNode.flags & VNodeFlags.COMPONENT_STATEFUL_NORMAL) {
        // 获取组件实例
        const instance = (nextVNode.children = prevVNode.children)
        // 更新 props
        instance.$props = nextVNode.data
        // 更新组件
        instance._update()
    } else {
        // 更新函数式组件
        const handle = (nextVNode.handle = prevVNode.handle)
        handle.prev = prevVNode
        handle.next = nextVNode
        handle.container = container
        handle.update()
    }
}
