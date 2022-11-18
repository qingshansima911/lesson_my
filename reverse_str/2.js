// 是不是回文
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '')
    const reversedStr = str.split('').reverse().join('');
    return reversedStr === str
}
// /[]/正则表达式   \w 字符 \W 非字符 \d数字   
// g是一直匹配 _下划线
console.log(isPalindrome('aba'));