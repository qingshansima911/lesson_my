// var propValue = function (obj) {
//     return obj.value
// }
function add(a, b, c) {
    return a + b + c;
}
// function memorize(f) {
//     // console.log(fn,...arguments);
//     // 缓存结果 {} key
//     var cache = {
//         // "lu": "抖音"
//     }
//     // 作用域
//     return function () {
//         // console.log("I'm inner function", cache.lu)
//         var key = arguments.length + Array.prototype.join.call(arguments, ",")
//         // console.log(arguments)
//         // console.log(Array.prototype.join.call(arguments, ","))
//         // console.log(key)
//         if (key in cache) {/* in json 运算符 */
//             return cache[key]/* 没有运行 f */
//         } else {
//             // cache[key] = f(arguments)
//             // apply call 都可以运行函数, 手动的指定内部的this
//             // apply 数组集合, 作为f 的参数
//             cache[key] = f.apply(this, arguments)
//             // cache[key] = f.call(this, ...arguments)
//             return cache[key]
//         }
//         // else return cache[key] = f.apply(this, arguments)
//     }
// }
// hasher JSON.stringify({value:1})
var memorize = function (func, hasher) {
    var memoize = function (key) {
        // console.log(key, "////////") //实参的第一个值
        // cache 
        var cache = memoize.cache;
        // key?
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        // console.log(hasher.apply(this, arguments), '????????????')
        // console.log(address)
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        // console.log(cache[address], '////////////');
        return cache[address];
    };
    // cache 挂在函数对象上
    memoize.cache = {};
    console.log(memoize, 'memoize');
    return memoize;
};
// var memoizedAdd = memorize(propValue)
// var memoizedAdd = memorize(propValue, JSON.stringify)
// console.log(memoizedAdd({ value: 1 })) // 1
// console.log(memoizedAdd({ value: 2 })) // 1
// var memoizedAdd = memorize(add)
// var memoizedAdd = memorize(add, function () {
//     var args = Array.prototype.slice.call(arguments)
//     return JSON.stringify(args)
// })
var memoizedAdd = memorize(add, function () {
    var args = Array.prototype.join.call(arguments)
    // console.log(JSON.stringify(args));
    return JSON.stringify(args)
})
console.log(memoizedAdd(1, 1, 1))
// console.log(memoizedAdd(1, 2, 2))