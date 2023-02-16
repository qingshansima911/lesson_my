// 手写Map 
// thisArg 指定 callbackFn 内部的this指向
Array.prototype.map = function (callbackFn,thisArg) {
    // this -> [1,2,3]
    // Array.prototype.map.call(null)
    if (this === null || this === undefined) {
        throw new TypeError('cannot read property map of null or undefined')
    }
    if (typeof(callbackFn) != 'function') {
        throw new TypeError(callbackFn + 'is not a function')
    }
    // 显示类型转换 this 对象
    let O = Object(this);
    let T = thisArg;

    let len = O.length;
    let A = new Array(len);  // 新数组，全新内存分配
    for (let k = 0; k < len; k ++){
        // this[k] 遍历的每一项
        // 下标
        // this 第三个参数
        if (k in O) {
            let kValue = O[k];  // 每一项
            let mappedValue = callbackFn.call(T,kValue,k,O)
            A[k] = mappedValue
        }
    }
    return A;
}
let nums = [1, 2, 3];
let obj = { val :5}
let newNums = nums.map(function (item, index, array) {
    return item + index + array[index] + this.val;
},obj);
console.log(newNums);

