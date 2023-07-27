module.exports = {
  base64Encode(str = '') {
    return new Buffer(str).toString('base64');
  }
}