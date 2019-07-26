/**
 * 队列
 * 先进先出
 */
class Queue {
    constructor() {
        this.items = []
    }
    // 入列
    enqueue(node) {
        this.items.push(node)
    }
    // 出列
    dequeue() {
        this.items.shift()
    }
    length() {
        return this.items.length
    }
    isEmpty() {
        return this.items.length === 0
    }
    clear() {
        this.items = []
    }
}