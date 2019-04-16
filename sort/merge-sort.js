/**
 * 分治，递归 然后合并
 */
function mergeSort(arr) {
    let len = arr.length

    if (len < 2) {
        return arr
    }
    let middle = len >> 1
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)

    // 递归
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let left_len = left.length
    let right_len = right.length
    let result = []
    let i = 0
    let j = 0

    while (i < left_len && j < right_len) {
        if (left[i] > right[j]) {
            result.push(right[j++])
        } else {
            result.push(left[i++])
        }
    }
    while (i < left_len) {
        result.push(left[i++])
    }
    while (j < right_len) {
        result.push(right[j++])
    }
    return result
}
let a1 = [7, 6, 2, 1, 3, 4, 5]
let a2 = mergeSort(a1)
console.log(a2)