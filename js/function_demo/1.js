// 封装  普通的相加函数
// add 函数声明在哪里？
'use strict'   //严格模式
function Test(){
    // this 由函数的运行方式决定
    console.log(this);
    this.x =1;
}
// 函数可以被new 被new的函数也叫构造函数
const o = new Test();
console.log(o.x);


function add(x,y) {
    // 检验参数   js独特  
    console.log(this, arguments);
    // this指向window或undefined, arguments
    return x + y;
}

let obj = {
    add: add,
}

console.log(add(1,2));   //普通函数
obj.add();  //  作为对象的方法调用的时候