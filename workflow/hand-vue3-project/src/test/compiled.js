"use strict";

require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
// 工程化把stylus es6+ typescript 全部引入项目中使用
var a = 1;
var b = 2;
var c = a + b;
var func = function func() {
  return a + b + c;
};
// promise不能编译，直接引入core-js
new Promise(function (resolve) {
  resolve(true);
});
