/**
 *  @question 
 * 		给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *   	最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 *    	你可以假设除了整数 0 之外，这个整数不会以零开头。
 *  @param digits number[]
 */
var plusOne = function(digits) {
    let len = digits.length

    digits[len - 1] += 1 // 先给最后一位加1

    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] === 10) {
            digits[i] = 0
            digits[i - 1]++
        } else {
            break
        }
    }
    digits[0] === 10 ? (digits[0] = 0, digits.unshift(1)) : ''

    return digits
}
let arr = [1, 2, 3]
const newArr = plusOne(arr)
console.log(newArr)