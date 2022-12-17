const bubbleSort = arr => {
    console.time("优化了排序区域和提前退出"); // 时间计算
    const length = arr.length; // 缓存数据的长度 变量
    // 相邻比较交换 一趟循环搞定一个位置的顺序是对的 最右侧一定是最大值
    // 多声明一些变量， 可以让我们放下一些思想
    let lastExchangeIndex = 0;    // 无序数列的边界，每次比较只需要比到这里为止
    let sortBorder = length - 1; // 已排好序的边界
    for (let i = 0; i < length - 1; i++) {
        let isSorted = true; // 是否可以直接退出？
        for (let j = 0; j < sortBorder; j++) {
            if (arr[j] > arr[j + 1]) {
                isSorted = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;
        if (isSorted) {
            break;
        }
    }
    console.timeEnd("优化了排序区域和提前退出");
}
const arr = [2, 6, 10, 5, 7, 4, 11, 12, 13, 14, 15];  // 引用式赋值 堆内存  值决定
bubbleSort(arr);
console.log(arr);