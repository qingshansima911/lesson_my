import { VNodeFlags, ChildrenFlags } from "./flags"

export const Fragment = Symbol() //唯一的key
export const Portal = Symbol()

export function h(tag, data = null, children = null) {
    let flags = null
    if (typeof tag === 'string') { //html/svg
        flags = tag === 'svg' ? VNodeFlags.ELEMENT_SVG : VNodeFlags.ELEMENT_HTML
    } else if (tag === Fragment) {
        flags = VNodeFlags.FRAGMENT
    } else if (tag === Portal) {
        flags = VNodeFlags.PORTAL
        tag = data && data.target
    } else {
        if (tag !== null && typeof tag === 'object') {
            flags = tag.functional ?
                VNodeFlags.COMPONENT_FUNCTIONAL : VNodeFlags.COMPONENT_STATEFUL_NORMAL
        } else if (typeof tag === 'function') {//函数组件
            flags = tag.prototype && tag.prototype.render ?
                VNodeFlags.COMPONENT_STATEFUL_NORMAL : VNodeFlags.COMPONENT_FUNCTIONAL
        }
    }
    let childrenFlags = null
    if (Array.isArray(children)) {
        const { length } = children
        if (length == 0) {
            childrenFlags = ChildrenFlags.NO_CHILDREN
        } else if (length == 1) {
            childrenFlags = ChildrenFlags.SINGLE_VNODE
            children = children[0]
        } else {
            childrenFlags = ChildrenFlags.KEYED_VNODES //key后面再做
            children = normalizeVNode(children)
        }
    } else if (children == null) {
        childrenFlags = ChildrenFlags.NO_CHILDREN
    } else if (children._isVNode) {
        childrenFlags = ChildrenFlags.SINGLE_VNODE
    } else {
        // children是文本
        childrenFlags = ChildrenFlags.SINGLE_VNODE
        children = createTextVNode(children + '')
    }
    return {
        _isVNode: true, //区别于其他对象 普通对象 响应式对象...
        el: null,
        tag,
        data,
        children,
        flags,
        childrenFlags,
        key: data && data.key ? data.key : null,
    }
}

function createTextVNode(text) {
    return {
        _isVNode: true,
        tag: null,
        // data: null,
        children: text,
        flags: VNodeFlags.TEXT,
        childrenFlags: ChildrenFlags.NO_CHILDREN
    }
}
function normalizeVNode(children) {
    const newChildren = []
    for (let i = 0, len = children.length; i < len; i++) {
        const child = children[i]
        if (child.key == null) {
            //如果原来的VNode没有key，则使用竖线|与该VNode在数组中的索引拼接而成的字符串作为key
            child.key = '|' + i
        }
        newChildren.push(child)
    }
    return newChildren
}