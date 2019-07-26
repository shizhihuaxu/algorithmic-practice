/**
 * 查找第一个唯一字符的位置
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let len = s.length
    let index
    let hash = {}

    for (let i = 0; i < len; i++) {
        let cur = s[i]
        if (!hash[cur]) {
            hash[cur] = 1
        } else {
            hash[cur]++
        }
    }

    for (let key in hash) {
        if (hash[key] === 1) {
            return s.indexOf(key)
        }
    }

    return -1
};
let str = "loveleetcode"
let index = firstUniqChar(str)
console.log(index)