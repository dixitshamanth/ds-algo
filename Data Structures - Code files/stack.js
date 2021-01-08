class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val) {
        let newNode = new Node(value)
        if (!this.first) {
            this.first = this.last = newNode
        }
        else {
            newNode.next = this.first
            this.first = newNode
        }
        return ++this.size
    }

    pop() {
        let removed = this.first;
        if (!removed) return undefined
        this.first = this.first.next;
        this.size--
        if (this.size === 0) this.last = null
        return removed
    }
}