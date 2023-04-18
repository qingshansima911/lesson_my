// import { h } from 'snabbdom'
import { Fragment, Portal, h } from './h'
// const elementVNode = h('div', null, h('span'))
// console.log(elementVNode)

// const elementWithTextVNode = h('div', null, '我是文本')
// console.log(elementWithTextVNode)

// const fragmentVNode = h(Fragment, null, [h('h1'), h('h1')])
// console.log(fragmentVNode);

// const portalVNode = h(Portal, {target: 'a'}, [h('h1'), h('h1')])
// console.log(portalVNode);

// 函数组件
// function MyFunctionalComponet() { }
// const functionalComponentVNode = h(MyFunctionalComponet, null, h('div'))
// console.log(functionalComponentVNode);

// 普通有状态组件
// import { Component } from './component'
// class MyStatefulComponent extends Component { }
// const statefulComponentVNode = h(MyStatefulComponent, null, h('div'))
// console.log(statefulComponentVNode);

import render from './render'
const elementVNode = h(
    'div',
    {
        style: {
            height: '100px',
            width: '100px',
            background: 'red'
        }
    },
    h('div',
        {
            style: {
                height: '50px',
                width: '50px',
                background: 'green'
            }
        }
    )
)
// console.log(elementVNode);
render(elementVNode, document.getElementById('app'))