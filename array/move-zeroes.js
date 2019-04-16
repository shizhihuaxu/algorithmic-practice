/**
 * @question  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @desc  
 * 		必须在原数组上操作，不能拷贝额外的数组。
 *   	尽量减少操作次数。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length
    let i = 0 // 用于记录0元素的下标
    let j = 1 // 用于寻找非0元素的下标，以便替换

    while (i < len && j < len) {
        if (nums[i] === 0 && nums[j] !== 0) {
            // 交换
            nums[i] = nums[j]
            nums[j] = 0 // 因为是与0交换，直接赋值位0 即可，省去了临时变量
            i++
            j++
        } else if (nums[i] !== 0 && nums[j] !== 0) {
            // 均向前移动
            i += 2
            j += 2
        } else if (nums[i] === 0 && nums[j] === 0) {
            // 寻找非0元素下标向前移动
            j++
        } else {
            i = j
            j++
        }
    }
};

let arr = [1, 0, 1]
moveZeroes(arr)
console.log(arr)