- 请介绍下  var let const
    1. es6以前  用 var 声明变量， 那时候没有常量
         let const 是es6(2015) 的变量和常量

    2. var let 变量声明
       const  常量 如果是复杂数据类型，值还是能变的

    3. let 支持块级作用域  var不支持

    4. var 申明的变量会挂载在window 全局对象上，会造成污染    let不会

    5. var 申明的变量会提升到所在作用域的最上面（声明的提升， undefined）不会报错
             影响代码的可读性，
             let不会提升，

    6. function 声明的函数， 会提升， 值也会提升
             const func = function(){}