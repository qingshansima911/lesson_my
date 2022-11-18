// 是不是回文
function isPalindrome(str) {
    const len = str.length;
    // 缓存字符的长度
    // 对称思想
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('aba'));