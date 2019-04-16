/**
 * @description  给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。
 *               假设字符串只包含小写字母
 *               如果字符串包含 unicode 字符怎么办
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var countLetters = function(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }
    return obj
}
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    if (s === t) return true

    let sToArr = s.split('')
    let tToArr = t.split('')

    let sObj = countLetters(sToArr)
    let tObj = countLetters(tToArr)

    for (let key in sObj) {
        if (!tObj[key] || tObj[key] !== sObj[key]) return false
    }
    return true
};
let s = "rat",
    t = "car"
let res = isAnagram(s, t)
console.log(res)
/**
 * 用时较快的范例 消除相同字母法
 */
var isAnagram1 = function(s, t) {
    while (s !== t && s.length === t.length) {
        if (s === t || s.length !== t.length) {
            break
        }
        var letter = new RegExp(s[0], 'g')
        s = s.replace(letter, '')
        t = t.replace(letter, '')
    }
    return s === t
}
/**
 * unicode 字符的解法 
 * 思路: 首先一个数组的26位代表26个英文字母
 * 如果s 和 t 中有相同的字符串且个数相同 就会互相抵消为0
 * 最后检查这个数组中只要有不为0的表示两个字符串不同
 */
var isAnagram2 = function(s, t) {
    var chars = Array(26).fill(0)

    for (var i = 0; i < s.length; i++) {
        chars[s.charCodeAt(i) - 97]++
    }

    for (var i = 0; i < t.length; i++) {
        chars[t.charCodeAt(i) - 97]--
    }

    for (var i = 0; i < chars.length; i++) {
        if (chars[i] !== 0) {
            return false
        }
    }

    return true
}