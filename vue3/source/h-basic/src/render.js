import { VNodeFlags } from "./flags"

export default function render(vnode, container) {
    // vnode: tag data children -> document.createElement DOM -> appendChild container
    // 判断是否是第一次挂载 挂载，更新，替换
    const preVNode = container.vnode
    if (preVNode == null) {
        mount(vnode, container)
        container.vnode = vnode
    } else {
        
    }
}

function mount(vnode, container, isSVG) {
    const { flags } = vnode
    if (flags & VNodeFlags.ELEMENT) {
        mountElement(vnode, container, isSVG)
    }
}
function mountElement(vnode, container, isSVG) {
    isSVG = isSVG || vnode.flags & VNodeFlags.ELEMENT_SVG
    const el = isSVG ? document.createElmentNS('http://www.w3.org/2000/svg', vnode.tag)
        : document.createElement(vnode.tag)
    vnode.el = el
    const data = vnode.data
    if (data) {
        for (let key in data) {
            switch (key) {
                case 'style':
                    for (let k in data.style) {
                        el.style[k]
                    }
            }
        }
    }
    container.appendChild(el)
}