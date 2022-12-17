let x = 1;
let y = 2;
let z;
z = x;
x = y;
y = z;
console.log(x, y);

// 对象放在堆， 简单数据类型放在栈
let o = {name:"叶"}
let b = o; // 引用
b.name = "任"
console.log(o.name);
let c = x; // 值得拷贝
c = 5;
console.log(x);