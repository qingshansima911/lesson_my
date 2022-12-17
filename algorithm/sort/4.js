const bubbleSort = arr => {
    console.time("冒泡排序耗时"); // 时间计算
    const length = arr.length; // 缓存数据的长度 变量
    // 相邻比较交换 一趟循环搞定一个位置的顺序是对的 最右侧一定是最大值
    for (let i = 0; i < length - 1; i++) {
        let isSorted = true;
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = false;
            }
        }
        if (isSorted) {
            break;
        }
    }
    console.timeEnd("冒泡排序耗时");
}
const arr = [1, 1, 1, 1, 1, 1, 1, 1, 2, 6, 10, 5, 7, 4];  // 引用式赋值 堆内存  值决定
bubbleSort(arr);
console.log(arr); 