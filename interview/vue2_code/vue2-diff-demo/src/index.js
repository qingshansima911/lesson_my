// console.log('hello world');
import { h } from './h' //VNode的生成
import render from './render' //渲染VNode
// 9种

// const prevVNode = h('div', null, '旧的VNode')
// // console.log(prevVNode);
// render(prevVNode, document.getElementById('app'))

// class MyComponent {
//     render() {
//         return h('div', null, '新的VNode')
//     }
// }
// const nextVNode = h(MyComponent) //内存
// setTimeout(() => {
//     render(nextVNode, document.getElementById('app'))
// }, 1000);

// const handler = () => alert('clicked')
// const prevVNode = h('div',
//     {
//         style: {
//             width: '100px',
//             height: '100px',
//             background: 'red'
//         },
//         onclick: handler
//     }
// )
// const nextVNode = h('div',
//     {
//         style: {
//             width: '100px',
//             height: '100px',
//             border: '1px solid green'
//         }
//     }
// )
// render(prevVNode, document.getElementById('app'))
// setTimeout(() => {
//     render(nextVNode, document.getElementById('app'))
// }, 1000);

// const handler = () => alert('clicked')
// const prevVNode = h('div', null,
//     h('p',
//         {
//             style: {
//                 width: '100px',
//                 height: '100px',
//                 background: 'red'
//             }
//         }
//     )
// )
// const nextVNode = h('div', null,
//     h('p',
//         {
//                 style: {
//                         width: '100px',
//                         height: '100px',
//                         border: '1px solid green'
//                     }
//                 }
//     )
// )
// render(prevVNode, document.getElementById('app'))
// setTimeout(() => {
//     render(nextVNode, document.getElementById('app'))
// }, 1000);

// const prevVNode = h('div', null,
//     h('p',
//         {
//             style: {
//                 width: '100px',
//                 height: '100px',
//                 background: 'red'
//             }
//         }
//     )
// )
// const nextVNode = h('div')
// render(prevVNode, document.getElementById('app'))
// setTimeout(() => {
//     render(nextVNode, document.getElementById('app'))
// }, 1000);

// const prevVNode = h('div', null, h('p', null, '子节点1'))
// const nextVNode = h('div', null, [h('p', null, '子节点2'), h('p', null, '子节点1')])
// render(prevVNode, document.getElementById('app'))
// setTimeout(() => {
//     render(nextVNode, document.getElementById('app'))
// }, 1000);

// const prevVNode = h('ul', null, [
//     h('li', { key: 'a' }, 1),
//     h('li', { key: 'b' }, 2),
//     h('li', { key: 'c' }, 3)
// ])
// const nextVNode = h('ul', null, [
//     h('li', { key: 'c' }, 3),
//     h('li', { key: 'a' }, 1),
//     h('li', { key: 'b' }, 2),
//     h('li', { key: 'd' }, 4)
// ])
// render(prevVNode, document.getElementById('app'))
// setTimeout(() => {
//     render(nextVNode, document.getElementById('app'))
// }, 1000);

const prevVNode = h('ul', null, [
    h('p', { key: 'a' }, '节点1'),
    h('p', { key: 'b' }, '节点2'),
    h('p', { key: 'c' }, '节点3')
])
const nextVNode = h('ul', null, [
    h('p', { key: 'd' }, '节点4'),
    h('p', { key: 'a' }, '节点1'),
    h('p', { key: 'b' }, '节点2'),
])
render(prevVNode, document.getElementById('app'))
setTimeout(() => {
    render(nextVNode, document.getElementById('app'))
}, 1000);
