# 函数

- 函数的地位
   1.被执行
      - 封装的能力
      function  add(a,b){
        return a + b;
      }

- this
   函数运行时创建的一个指针   指向谁呢？

   1. 指向是不固定的， 运行的方式来决定

   2. add 作为普通函数被调用的时候， this指向？
      没有被谁调用， 返回的就是 运行环境  默认情况下为 window  严格模式'use strict'  undefined；

   3. 作为对象的方法调用时候，this指向对象 

   4. 函数作为构造函数使用的时候  this指向实例

   5. 函数作为事件的回调函数来执行的时候  this指向事件发生的元素

- 严格模式， 让我们使用js的好的一面
    js 语言早期  开发的很快  语言的糟粕， 避开他？
    - 普通函数运行时  this 指向全局，
    - 定义变量的时候  什么也不用，  全局
     The Good Parts（语言精粹）

- 作用域
    1. var 全局属于window
    2. var 函数作用域
    3. 块级(es6 +  let  const)
    const用于声明常量 let声明变量
   
- 字符串模板
      innerHTML += `
                   支持多行
                   `