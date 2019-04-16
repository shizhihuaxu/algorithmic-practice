/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === '') return true

    let reg = /[^0-9A-Za-z]/g
    let str = s.replace(reg, '').toLowerCase()

    let arr = str.split('')
    if (arr.reverse().join('') === str) return true

    return false
}
let str = "A man, a plan, a canal: Panama"
let res = isPalindrome(str)
console.log(res)