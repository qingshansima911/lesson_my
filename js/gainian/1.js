function sum(a, b) {
  // 数组的slice方法
  let args = Array.prototype.slice.call(arguments);
  console.log(args);
  let args3 = Array.prototype.concat.apply([], arguments);
  console.log(args3);
  let args4 = Array.from(arguments);
  console.log(args4);
  let args5 = [...arguments];
  console.log(args5);
  // 数组的splice方法 该方法会改变原始数组
  let args2 = Array.prototype.splice.call(arguments, 0);
  console.log(args2);
}
sum(1, 2);