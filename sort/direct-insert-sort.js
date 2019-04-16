/**
 * 直接插入排序
 * 核心思想是向一个已经排序好的数组里插入一个元素
 * 初始排序数组只有一个元素，就是arr[0]
 */
function directInsertSort(arr) {
    let len = arr.length
    let current
    let index

    for (let i = 1; i < len; i++) {
        current = arr[i] // 当前带插入元素
        index = i - 1

        while (index >= 0 && arr[index] > current) {
            arr[index + 1] = arr[index]
            index--
        }
        if (index + 1 != i) {
            arr[index + 1] = current
        }
    }
    return arr
}
let a1 = [7, 6, 2, 1, 3, 4, 5]
let a2 = directInsertSort(a1)
console.log(a2)