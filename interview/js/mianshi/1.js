let arr = [1, [2, [3, [4, 5]]], 6]
// es10(2019)提供的flat API  es6(2015)
// arr = arr.flat(Infinity);  //兼容性不好
// console.log(arr);

// let str = JSON.stringify(arr); // 序列化
// console.log(str);
// let arr1 = str.replace(/(\[|\])/g, '') // 将[和]用空格代替
//     .split(',')
//     // .map(item => +item);
// console.log(arr1);

// let str = JSON.stringify(arr);
// str = str.replace(/(\[|\])/g, '');
// str = '[' + str + ']';
// console.log(str);
// arr = JSON.parse(str);
// console.log(arr);

// let result = []
// let fn = function (arr) {
//     for (let i = 0; i < arr.length; i++){
//         let item = arr[i];
//         if (Array.isArray(item)){
//             fn(item)
//         }else {
//             result.push(item);
//         }
//     }
//     return result;
// }
// console.log(fn(arr));

// function flatten(arr) {
//     return arr.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur)?flatten(cur):cur)
//     },[])
// }
// console.log(flatten(arr));

// while (arr.some(Array.isArray)){
//     arr = [].concat(...arr);
// }
// console.log(arr);


