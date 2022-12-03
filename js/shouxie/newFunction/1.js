function Person(name, age) {
    // 构造
    // 基于原型的封装 {}
    this.name = name;
    this.age = age;
}
// Person.prototype.sayHi = function () {
//     console.log(`你好，${this.name}`);
// }
// const aTao = new Person('叫阿涛', 17);


/**
 * @func new的过程
 * @params constructor ...
 * 1. js 基于对象 {}
 * 2. Person this 构造的过程
 * 3. 手动返回 实例对象
 */

function myNew(constructor, ...arguments) {
    const obj = {} // 基于对象
    // console.log(arguments[0]);
    // 借
    // [1,2,3].shift();
    // const constructor = Array.prototype.shift.call(arguments);
    // arguments 能用下标访问， 但是没有数组的方法， arguments不是数组，而是数组
    // console.log(typeof arguments, Object.prototype.toString.call(arguments));
    // console.log(arguments instanceof Array);
    // {}
    // Person 属性？
    // console.log(arguments);
    constructor.apply(obj, arguments);
    // constructor.call(obj, ...arguments); //展开
    console.log(obj);
    // return
    // __proto__ 指向
    obj.__proto__ = constructor.prototype;
    return obj;
}
let lu = myNew(Person, '卢总', 17);
// console.log(lu);
// lu.sayHi();