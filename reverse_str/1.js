// 匿名函数
// js 变量或常量的类型由值来决定
// 函数表达式
const reverse = function (str) {
    // let reverseStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reverseStr += str[i];
    // }
    // return reverseStr;
    return str.split('').reverse().join('');
}
console.log(reverse('hello'));
console.log(reverse('aba'));
// 回文
// 函数
// function reverse() {}