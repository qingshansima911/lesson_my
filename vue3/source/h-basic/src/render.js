import { ChildrenFlags, VNodeFlags } from "./flags"

export default function render(vnode, container) {
    // vnode: tag data children -> document.createElement DOM -> appendChild container
    // 判断是否是第一次挂载 挂载，更新，替换
    const preVNode = container.vnode
    if (preVNode == null) {
        mount(vnode, container)
        container.vnode = vnode
        // console.log(vnode);
    } else {
        // 更新
        if (vnode) {
            // vnode preVnode diff
            // patch(preVNode, vnode, container)
            container.vnode = vnode
        } else {
            // 删除
            container.removeChild(preVNode.el)
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
    }else if (flags & VNodeFlags.FRAGMENT) {
        mountFRAGMENT(vnode, container, isSVG)
    }else if (flags & VNodeFlags.PORTAL) {
        mountPORTAL(vnode, container, isSVG)
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
}
const domPropsRE = /\[A-Z]|^(?:value|checked|selected|muted)$/;
function mountComponent(vnode, container, isSVG) {
    
}
function mountText(vnode, container) {
    
}
function mountFRAGMENT(vnode, container, isSVG) {
    
}
function mountPORTAL(vnode, container, isSVG) {
    
}