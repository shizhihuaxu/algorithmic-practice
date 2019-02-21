/**
 * 旋转数组 
 * @question  给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。要求使用空间复杂度为 O(1) 的原地算法
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// -------------------------  方法一  ------------------------
var rotate1 = function(nums, k) {
    let len = nums.length

    k = k % len
    if (k === 0 || len === 1) return

    for (let i = 1; i <= k; i++) { // 移动位数循环
        let temp = nums[len - 1] // 暂存最后一个元素

        for (let j = len - 1; j >= 0; j--) { // 数组的每一个元素的循环
            nums[j] = nums[j - 1]
        }
        nums[0] = temp //第0个元素赋值为最后一个元素
    }
};

let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3
rotate1(nums, k)
console.log(nums)


// -------------------------  方法二  -----------------------------
var rotate2 = function(nums, k) {
    let len = nums.length
    let begin = 0
    let roating = nums[0] // 当前需要被移动的元素
    let roating_index = 0 // 目标替换下标
    let temp
    let next

    k %= len
    if (k === 0 || len === 1) return

    for (let i = 0; i < len; i++) {
        next = (roating_index + k) % len // 计算当前元素将要移动到的目标位置
        temp = nums[next] // 将当前元素移动的目标位置上的元素暂存起来
        nums[next] = roating // 将当前元素赋值到目标位置上

        // 对于数组长度 % 移动次数 != 0 的处理，假设下一步又回到整除的位置 就向前移动一个被操作的元素
        if (next == begin) {
            begin++
            roating_index = begin
            roating = nums[begin]
            continue
        }
        roating_index = next // 继续操作下一个元素 记录下标
        roating = temp // 继续操作下一个元素 暂存元素的值
    }
}
let nums = [-1, -100, 3, 99]
let k = 2

rotate2(nums, k)
console.log(nums)