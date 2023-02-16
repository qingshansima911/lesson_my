// 手写的时候，es6版本比老版本更优雅 
// Function.prototype.call = function (context) {
//     context = context || window
//     let fn = Symbol('fn') // 唯一值
//     // 给context 动态添加了fn属性
//     context.fn = this;// 绝对不会覆盖context上的属性
//     let args = []; // 函数原来的参数
//     for (let i = 1,len = arguments.length; i < len; i++) {
//         args.push('arguments['+ i + ']');
//     }
//     // console.log(args);
//     // 只有读源码，写源码的才会用到eval
//     let result = eval('context.fn(' + args + ')');
//     delete context // 让context干净
//     return result
// }
Function.prototype.call = function (context,...arguments) {
    context = context || window
    let fn = Symbol('fn') // 唯一值
    // 给context 动态添加了fn属性
    context.fn = this;// 绝对不会覆盖context上的属性
    // 只有读源码，写源码的才会用到eval
    let result = eval('context.fn(...arguments)');
    delete context // 让context干净
    return result
}
let me = { name: 'ren' };
function say() {
    console.log(`my name is ${this.name || 'default'}`);
}
say.call(me, 1, 2);