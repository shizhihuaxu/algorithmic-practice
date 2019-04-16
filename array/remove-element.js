/**
 * @desc 删除数组中给定的数字
 *       不使用额外空间
 */
function removeElement(nums, val) {
    let len = nums.length
    let i = 0

    for (let j = 0; j < len; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]
            i++
        }
    }
    return i
}
let nums = [0, 1, 2, 2, 3, 0, 4, 2]
let val = 2
let len = removeElement(nums, val)
console.log(len)
console.log(nums)