// vue 也是模块化开发出来的 reactivity 模块 响应式
// reactive 普通对象包装成响应式对象 effect 依赖收集器
const { effect, reactive } = require('@vue/reactivity')
let dummy
const counter = reactive({ num1: 1, num2: 2 })
effect(() => {
    // proxy 两个get 收集到 effect 和 counter 之间的依赖关系
    dummy = counter.num1 + counter.num2
    console.log(dummy); // 每次couter.num1 修改都会打印日志
})
setInterval(() => {
    counter.num1++
}, 1000);