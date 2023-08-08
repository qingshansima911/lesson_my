const { effect, reactive, ref } = require('@vue/reactivity')

let dummy
const counter = reactive({ num1: 1, num2: 2 }) // proxy
// console.log(counter);
// template {{}} onMounted counter.num
// effect 收集依赖，会自动执行一次
effect(() => {
  dummy = counter.num1 + counter.num2;
  console.log(dummy);
})

setInterval(() => {
  counter.num1++
}, 1000)