let nums = [1, 2, 3];
let obj = { val :5}
// 原数组不变
// 命令式 -> 函数式
// 参数有三个，每一项、下标、数组本身
let newNums = nums.map(function (item, index, array) {
    // 没有返回值
    return item + index + array[index] + this.val;
},obj);
console.log(newNums);