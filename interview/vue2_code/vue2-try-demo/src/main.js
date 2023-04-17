// import { template } from "lodash";

// // 模板引擎 = 字符串 + 数据
// const compiler = template('<h1><%= title %></h1>')
// const html = compiler({ title: 'My Component' })
// document.getElementById('app').innerHTML = html

// setTimeout(() => {
//     const html2 = compiler({ title: '字节大神' })
//     document.getElementById('app').innerHTML = html2
// },1000);

// 组件的原身
// import { template } from "lodash";
// // props 数据参数 子组件
// const MyComponent = props => {
//     // render
//     MyComponent.cache = null
//     const compiler = MyComponent.cache ||
//         (MyComponent.cache = template('<h1><%= title %></h1>'))
//     return compiler(props)
// }
// document.getElementById('app').innerHTML = MyComponent({ title: 'My Component' })

// setTimeout(() => {
//     document.getElementById('app').innerHTML = MyComponent({ title: '字节大神' })
// }, 1000);


// import { h, init } from 'snabbdom'
// // init方法用来穿件patch函数
// const patch = init([])
// // 返回值是VDOM
// const MyComponent = props => {
//     return h('h1', props.title)
// }

// // 组件的产出是VNode
// const prevVnode = MyComponent({ title: 'prev' })
// // 将VNode渲染成真实的DOM
// patch(document.getElementById('app'), prevVnode)

// MyComponent组件
class MyComponent {
    render() {
        // render函数产出VNode
        return {
            tag: 'MyComponent'
        }
    }
}
// VNode
const componentVnode = {
    tag: MyComponent
}
// const elementVnode = {
//     tag: 'div'
// }
function render(vnode, container) {
    if (typeof vnode.tag === 'string') {
        // 挂载html标签
        mountElement(vnode, container)
    } else {
        // 挂载组件
        mountComponent(vnode, container)
    }
}
// 渲染
// render(elementVnode, document.getElementById('app'))
render(componentVnode, document.getElementById('app'))

function mountElement(vnode, container) {
    // 创建元素
    const el = document.createElement(vnode.tag)
    // 将元素添加到容器中
    container.appendChild(el)
}
function mountComponent(vnode, container) {
    // Component类 创建组件实例
    const instance = new vnode.tag() //this
    // 渲染 表达组件的虚拟DOM
    instance.$vnode = instance.render()
    // 挂载
    mountElement(instance.$vnode, container)
}
