function Cat(name, color) {
    // {}  Object 
    return {
        name: name,
        color: color
    }
}
// 基于对象 复用
var cat1 = Cat("大毛", "黄色");
var cat2 = Cat("二毛", "黑色");
console.log(cat1);
// cat1 cat2 没有内在的联系