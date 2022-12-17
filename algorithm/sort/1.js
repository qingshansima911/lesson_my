// 算法题目 先排序 再计算
// 冒泡 选择 快排 堆排序 插入 归并
const arr = [1, 4, 2, 3, 6, 10, 7];
arr.sort((a, b) => {
    return b - a
})
console.log(arr);