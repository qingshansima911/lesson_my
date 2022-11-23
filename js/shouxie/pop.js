// pop
// 输出数组的最后一个元素，不用传参，返回被删除的元素
const arr = [1, 2, 3, 4];
Array.prototype.pop2 = function () {
    // this[this.length - 1] = null;
    let temp = this[this.length - 1];
    this.length--;
    return temp;
}
console.log(arr.pop2());
console.log(arr);