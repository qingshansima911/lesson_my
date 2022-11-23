// 'use strict'
//变量的作用域
var name = '龙';  //  全局变量  window
// this 指向谁取决于调用方式
// js 变量属于作用域
function func() {
    y = 2;  /*去掉var就变成了全局变量  但不推荐这么做，因为很难维护,而且在严格模式下会报错*/
    var name = '楠'  // func  局部变量 
    {
        // var 函数作用域
        //let 块级作用域
        let x = 1;
        var z = 3;  // es5 不支持块级作用域
        let name = '海'
    }
    console.log(name, z, y);
}
func();
console.log(y);