/**
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，
 * 判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (s.length === 0 || wordDict.length === 0) return false

    let len = s.length
    let dp = [true]
    let sub = ''

    for (let i = 1; i < len + 1; i++) {
        for (let j = 0; j < i; j++) {
            sub = s.substring(j, i)

            if (dp[j] && wordDict.indexOf(sub) > -1) {
                dp[i] = true
                break
            } else {
                dp[i] = false
            }
        }
    }

    return dp[len]
};

let str = 'carscarss'
let wordDict = ['car', 'ca', 'rs']

let flag = wordBreak(str, wordDict)
console.log(flag)