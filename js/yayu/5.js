function add(a, b, c) {
    return a + b + c;
}
function memorize(f) {
    // console.log(fn,...arguments);
    // 缓存结果 {} key
    var cache = {
        // "lu": "抖音"
    }
    // 作用域
    return function () {
        // console.log("I'm inner function", cache.lu)
        var key = arguments.length + Array.prototype.join.call(arguments, ",")
        // console.log(arguments)
        // console.log(Array.prototype.join.call(arguments, ","))
        // console.log(key)
        if (key in cache) {/* in json 运算符 */
            return cache[key]/* 没有运行 f */
        } else {
            // cache[key] = f(arguments)
            // apply call 都可以运行函数, 手动的指定内部的this 
            // apply 数组集合, 作为f 的参数
            cache[key] = f.apply(this, arguments)
            // cache[key] = f.call(this, ...arguments)
            return cache[key]
        }
        // else return cache[key] = f.apply(this, arguments)
    }
}
// memorize 高阶函数
// memorize 内部生成了闭包函数， 并且return 给memoizedAdd
var memoizedAdd = memorize(add)
// memoizedAdd(1, 2, 3)
console.time("use memorize")/* 计时开始 */
for (var i = 0; i < 100000; i++) {
    memoizedAdd(1, 2, 3)/* 进出栈费时间 */
    // add(1, 2, 3)
}
console.timeEnd("use memorize")/* 计时结束 */