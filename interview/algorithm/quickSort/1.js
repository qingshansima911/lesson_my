function quickSort(arr, left = 0, right = arr.length - 1) {
    // 递归的退出条件
    if (arr.length > 1) {
        // 下一次划分左右组数组的索引位
        const lineIndex = partition(arr, left, right)
        if (left < lineIndex - 1) {
            quickSort(arr, left, lineIndex - 1)
        }
        if (lineIndex < right) {
            quickSort(arr, lineIndex, right)
        }
    }
    return arr
}
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
// 分成 左边小 pivot 右边大
function partition(arr, left, right) {
    let pivotValue = arr[Math.floor(left + (right - left) / 2)]
    let i = left
    let j = right
    while (i <= j) {
        // 找到左侧不小于pivotValue  找到右侧不大于pivotValue 互相交换
        while (arr[i] < pivotValue) {
            i++
        }
        while (arr[j] > pivotValue) {
            j--
        }
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }
    return i
}


console.log(quickSort([8, 7, 6, 5, 4, 3, 2, 1]));