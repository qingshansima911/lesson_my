// es6企业级大型项目 面向对象的能力
// public private extends
// 唯一值，没必要，也不会去记忆
// 私有方法？累的方法，供内部使用，隐藏内部的细节
const _privateMethod = Symbol('privateMethod');
class MyClass {
  constructor() {
    this[_privateMethod] = () => {
      console.log('This is a private method.');
    };
  }
    publicMethod() {
    //   symbol私有方法的调用方式
    this[_privateMethod]();
  }
}
const obj = new MyClass();
obj.publicMethod(); // 输出 "This is a private method."
obj[_privateMethod](); // 报错，私有方法无法访问