import { ChildrenFlags, VNodeFlags } from "./flags"
import patchData from './patchData'

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

function mount(vnode, container, isSVG) {
    const { flags } = vnode
    if (flags & VNodeFlags.ELEMENT) {
        mountElement(vnode, container, isSVG)
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
function mountElement(vnode, container, isSVG) {
    isSVG = isSVG || vnode.flags & VNodeFlags.ELEMENT_SVG
    // console.log(isSVG);
    const el = isSVG ? document.createElmentNS('http://www.w3.org/2000/svg', vnode.tag)
        : document.createElement(vnode.tag)
    vnode.el = el
    const data = vnode.data
    if (data) {
        // console.log(data);
        for (let key in data) {
            // console.log(key);
            switch (key) {
                case 'style':
                    for (let k in data.style) {
                        el.style[k] = data.style[k]
                        // console.log(el.style[k]);
                    }
                    break;
                case 'class':
                    if (isSVG) {
                        el.setAttribute('class', data[key])
                    } else {
                        // to primitive
                        el.className = data[key]
                        // console.log(data[key]);
                    }
                default:
                    const domPropsRE = /\[A-Z]|^(?:value|checked|selected|muted)$/;
                    if (domPropsRE.test(key)) {
                        // key属于dom原生的属性
                        el[key] = data[key]
                    } else {
                        // key不属于dom原生的属性
                        el.setAttribute(key, data[key])
                    }
                    break;
            }
        }
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
    container.appendChild(el)
    vnode.ref && vnode.ref(el)
}

function mountText(vnode, container) {
    const el = document.createTextNode(vnode.children)
    container.appendChild(el)
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
    const instance = new vnode.tag()
    // 渲染VNode
    instance.$vnode = instance.render()
    // 挂载
    mount(instance.$vnode, container, isSVG)
}

function patch(prevVNode, nextVNode, container) {
    const nextFlags = nextVNode.flags
    const prevFlags = prevVNode.flags
    // console.log(prevFlags, nextFlags);
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
}