/**
 * @question 删除排序数组中重复项
 *
 * @desc 
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 */

function deduplication(arr) {
    let len = arr.length
    let i = 0

    if (len === 0) {
        return 0
    }
    // 因为是排序数组 所以相同的值肯定在相邻的位置
    for (let j = 1; j < len; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }

    return i + 1
}

let arr1 = [0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4, 5]
let len = deduplication(arr1)
console.log(len)
console.log(arr1)