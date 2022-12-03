// 构造函数
//  哪一站？Function(函数原型) -> Object
function Person(name, age) {
    // 构造
    // 基于原型的封装 {}
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log(`你好，${this.name}`);
}
const aTao = new Person('叫阿涛', 17);
console.log(aTao instanceof Person);
console.log(aTao instanceof Object);