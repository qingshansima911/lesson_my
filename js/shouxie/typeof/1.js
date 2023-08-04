function typeOf(obj) {
  let res = Object.prototype.toString.call(obj).split(' ')[1]
  // console.log(res);
  res = res.substring(0, res.length - 1).toLowerCase()
  return res
  // 评论区里提到的更好的写法
  // return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
console.log(typeOf([]));// 'array'
console.log(typeOf({}));// 'object'
console.log(new Date);// 'date'