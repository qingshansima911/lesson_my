// let arr = [1, 1];
// let newArr = arr; // 赋值不是拷贝，同一个内存地址引用
// newArr[0] = 100;
// console.log(arr);

let arr = [1, 1, { val:1 }];
// 浅拷贝 对象不能拷贝
// let newArr = arr.slice();
// newArr[0] = 100;
// console.log(arr);
// console.log(newArr);
// newArr[2].val = 2;
// console.log(arr);

// 深拷贝
// 循环引用 内存溢出
// 函数等不支持序列化，直接忽略
console.log(JSON.stringify(arr));
const newArr = JSON.parse(JSON.stringify(arr)); 
newArr[2].val = 2;
console.log(arr);
console.log(newArr);