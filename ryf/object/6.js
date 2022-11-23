function Cat(name, color) {
    this.name = name;
    this.color = color;
    // this.prototype.type = "猫科动物";/* 省内存 */
    // this.prototype.eat = function () {
    //     console.log("吃老鼠");
    // };
}
// prototype
// 拿到构造函数的prototype对象的属性
// 构造函数的prototype对象是用来提供所有实例共享的属性和方法
Cat.prototype.type = "猫科动物";
Cat.prototype.eat = function () {
    console.log("吃老鼠");
};
var cat1 = new Cat("大毛", "黄色");
console.log(cat1);
var cat2 = new Cat("二毛", "黑色");
// alert(cat1.type); // 猫科动物
// cat1.eat(); // 吃老鼠