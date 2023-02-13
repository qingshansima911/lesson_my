// 数组求和
function sum(a, b) {
  let args = Array.prototype.concat.apply([], arguments);
  // console.log(args);
  return args.reduce((sum, cur) => sum + cur, 0);
}
console.log(sum(1, 2));