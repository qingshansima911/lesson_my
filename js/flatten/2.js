var arr = [1, [2, [3, 4]], 5];
function flatten() {
    // return arr.toString().split(',').map(function (item) {
    //     return +item
    // })
    return arr.toString().split(',').map(item=>+item)
}
console.log(flatten(arr));