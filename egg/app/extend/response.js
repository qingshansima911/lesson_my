module.exports = {
  // 要设置的方法以 set 关键字开头
  set token(token) {
    this.set('token', token)
  }
};