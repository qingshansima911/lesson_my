// console.log('hello world');
import h from './h' //VNode的生成
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

const handler = () => alert('clicked')
const prevVNode = h('div',
    {
        style: {
            width: '100px',
            height: '100px',
            background: 'red'
        },
        onclick: handler
    }
)
render(prevVNode, document.getElementById('app'))
const nextVNode = h('div',
    {
        style: {
            width: '100px',
            height: '100px',
            border: '1px solid green'
        }
    }
)
setTimeout(() => {
    render(nextVNode, document.getElementById('app'))
}, 1000);
