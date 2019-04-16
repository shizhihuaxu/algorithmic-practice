/**
 * Lomuto partition scheme
 * 如果数组已经排序号，将会导致最坏的时间复杂度 n^2
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
    let pivot

    if (left < right) {
        pivot = partition(arr, left, right)

        quickSort(arr, left, pivot - 1)
        quickSort(arr, pivot + 1, right)
    }
    return arr
}

function partition(arr, left, right) {
    let pivot = arr[right]
    let i = left

    for (let j = left; j <= right - 1; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j)
            i = i + 1
        }
    }
    swap(arr, i, right)

    return i
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}