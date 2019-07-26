/**
 * @description 将字符串分割为回文字符串，列出所有可能
 * @param {string} s
 * @return {string[][]}
 */
// 判断是否为回文
var isPalindrome = function(str) {
    let arr = str.split('')
    if (arr.reverse().join('') === str) return true

    return false
}

var findPalindrome = function(tempArr, str, resArr, index) {
    let len = str.length

    if (tempArr.join('').length === len) {
        // 防止由于引用传递的问题 最后一次的tempArr的新值改变了原来的tempArr的值
        let copyArr = JSON.parse(JSON.stringify(tempArr))

        resArr.push(copyArr)
        return
    }

    for (let i = index + 1; i <= len; i++) {
        let before = str.slice(index, i)

        if (isPalindrome(before)) {
            tempArr.push(before)
            findPalindrome(tempArr, str, resArr, i)
            tempArr.pop()
        }
    }
}
var partition = function(s) {
    let res = []
    let temp = []

    if (s.length === 0) return res

    findPalindrome(temp, s, res, 0)
    return res
}
let str = 'aabbccbb'
let arr = partition(str)
console.log(arr)