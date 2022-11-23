// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         sayHello(){

//         }
//     }
// }
// 构造函数的作用 1.为对象添加属性 2.共享类的方法

// js  独特的面向对象方式
// 'use strict' //严格模式
var name = '立新';
var age = 30;
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    // this 字符串模板
    console.log(`hi, 我是${this.name},今年${this.age}`);
    // console.log('hi, 我是' + this.name + '，今年' + this.age);
}
const long = new Person('龍', 22);  //构造函数
long.sayHello();  //对象方法被运行
console.log(long.name);

const nan = new Person('楠', 22);
nan.sayHello();

const nb = long.sayHello;
nb();