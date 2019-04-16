/**
 * 折半插入排序
 * 在直接插入排序中，由于插入的数组是一个已经排好序的数组，因此不必按顺序
 * 依次寻找插入点，只需要比较它们的中间值与待插入元素的大小，找到插入点
 */
function binaryInsertSort(arr) {
    let len = arr.length
    let current
    let middle
    let low
    let high

    for (let i = 1; i < len; i++) {
        current = arr[i]
        low = 0
        high = i - 1

        // 找插入点位置
        while (low <= high) {
            // 除2向下取整
            middle = (low + high) >> 1

            if (arr[middle] <= current) {
                low = middle + 1
            } else {
                high = middle - 1
            }
        }
        for (let j = i; j > low; j--) {
            arr[j] = arr[j - 1]
        }
        arr[low] = current
    }
    return arr
}
let a1 = [7, 6, 2, 1, 3, 4, 5]
let a2 = binaryInsertSort(a1)
console.log(a2)