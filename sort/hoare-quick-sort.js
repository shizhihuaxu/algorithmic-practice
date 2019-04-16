/**
 * Hoare partition scheme
 * 快速排序的核心吗思想是：
 *   1.  选择一个 pivot。
 *   2.  对数组重新排序，使小于pivot的元素都在pivot 的左侧,
 *       大于pivot 的元素都在pivot 的右侧,
 *       相同大小的在左右都可以。
 *   3.  对子数组重复上两步操作
 */

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    let pivot

    if (arr.length > 1) {
        pivot = partition(arr, left, right)

        if (left < pivot - 1) {
            quickSort(arr, left, pivot - 1)
        }
        if (pivot < right) {
            quickSort(arr, pivot, right)
        }
    }
    return arr
}

function partition(arr, left, right) {
    let pivot = arr[(left + right) >> 1]
    let i = left
    let j = right

    while (i <= j) {
        while (arr[i] < pivot) {
            i++
        }
        while (arr[j] > pivot) {
            j--
        }
        if (i <= j) {
            swap(arr, i, j)
            i++
            j--
        }
    }

    return i
}