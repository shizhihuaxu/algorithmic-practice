/**
 * 栈
 * 后进先出
 */
class stack {
    constructor() {
        this.items = []
    }
    push(node) {
        this.items.push(node)
    }
    pop() {
        this.items.pop()
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