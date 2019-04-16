/**
 * 将数组通过增量进行分组，然后对每个子分组进行直接插入排序，逐渐减小增量
 * 
 */
function shellSort(arr) {
    let len = arr.length
    let gap = len >> 1
    let index

    while (gap >= 1) {
        // 以gap进行分组进行直接排序
        for (let i = gap; i < len; i++) {
            index = i - gap
            current = arr[i]

            while (index >= 0 && arr[index] > current) {
                arr[index + gap] = arr[index]
                index -= gap
            }
            if (index + gap != i) {
                arr[index + gap] = current
            }
        }
        // 更新gap 
        gap = gap >> 1
    }
    return arr
}
let a1 = [7, 6, 2, 1, 3, 4, 5]
let a2 = shellSort(a1)
console.log(a2)