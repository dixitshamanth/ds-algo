class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
        let newNode = new Node(val)
        if (this.first === null) {
            this.first = newNode
            this.last = newNode
        }
        else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue() {
        let removed = this.first;
        if (!removed) return undefined
        this.first = this.first.next;
        this.size--
        if (this.size === 0) this.last = null
        return removed
    }
}