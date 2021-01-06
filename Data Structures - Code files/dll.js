class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++

        return this
    }

    pop() {
        if (this.length === 0) return undefined
        let popped = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.tail = popped.prev
            this.tail.next = null
            popped.prev = null
        }
        this.length--
        return popped
    }

    shift() {
        if (this.length === 0) return undefined
        let removed = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.head = removed.next
            this.head.prev = null
            removed.next = null
        }
        this.length--
        return removed
    }

    unshift(val) {
        let newNode = new Node(val)
        if (this.length === 0) this.head = this.tail = newNode
        else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return null
        if (index <= Math.floor(this.length / 2)) {
            let cur = this.head
            let counter = 0
            while (counter != index) {
                cur = cur.next
                counter++
            }
            return cur
        }
        else {
            let counter = this.length - 1
            let cur = this.tail
            while (counter != index) {
                cur = cur.prev
                counter--
            }
            return cur
        }
    }

    set(index, value) {
        let node = this.get(index)
        if (node) {
            node.val = value
            return true
        }
        else {
            return false
        }
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return !!this.unshift(value)
        if (index === this.length) return !!this.push(value)

        prevNode = this.get(index - 1)
        newNode = new Node(value)
        newNode.next = prevNode.next
        newNode.prev = prevNode
        prevNode.next = newNode
        newNode.next.prev = newNode

        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) return this.shift()
        else if (index === this.length - 1) return this.pop()

        deleteNode = this.get(index)
        beforeNode = deleteNode.prev
        afterNode = deleteNode.next
        beforeNode.next = afterNode
        afterNode.prev = beforeNode
        deleteNode.prev = deleteNode.next = null

        this.length--
        return deleteNode
    }
}

dll = new doublyLinkedList()

dll.push(10)
dll.push(18)
dll.push(13)

