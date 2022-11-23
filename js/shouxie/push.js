// 末尾添加一个元素，多个元素
// 返回值是新数组的长度
const arr = [1, 2, 3];
// 如何在arr object 上添加 push2
Array.prototype.push2 = function () {
    // console.log(typeof arguments,Object.prototype.toString.call(arguments));
    // 如何得到所有的参数   
    // console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}
arr.push2(4, 5, 6);
console.log(arr);