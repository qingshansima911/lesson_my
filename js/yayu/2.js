// 本分
function add(a, b) {
    return a + b;
}
// fn 是等待被优化的函数
// 闭包 函数内部还有函数 
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
// 函数运行后就被销毁
// 函数进入执行栈， 创建函数作用域， 
var memorizeAdd = memorize(add);/* 运行才会生成闭包函数 */
// 函数出栈， 内存被回收， cache 应该没有了， 但却没有， cache 被下面的函数引用着
console.log(memorizeAdd(1, 2)) /* 运行时可以找到生成时上下文环境中的变量 */
memorizeAdd(1, 2)