var stuA = {
    name: "蔡总"
}
var stuB = {
    name: "刘总"
}
function sayHi(...args) {
    console.log(arguments, ...args);
    console.log(`你好，我是${this.name}`);
}
// stuA stuB 都能 sayHi
// call apply 改天换命， 手动改变 this 的指向
// sayHi.call(stuA);
// sayHi.call(stuB);
// sayHi.apply(stuA);
// sayHi.apply(stuB);

sayHi.apply(stuB, [1, 2]);
sayHi.call(stuB, 1, 2);

// bind 返回一个函数
// var func = sayHi.bind(stuA);
// func();
// var func = sayHi.bind(stuB);
// func();

// 原型链
// Object.prototype.sayHi = sayHi;
// stuA.sayHi();
// stuB.sayHi();