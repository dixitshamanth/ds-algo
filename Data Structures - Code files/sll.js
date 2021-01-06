class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        let newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1
        return this
    }

    traverse() {
        let current = this.head;
        process.stdout.write("Head:")
        while (current) {
            process.stdout.write(current.val + "-->")
            current = current.next
        }
        process.stdout.write(":Tail" + "\n")
    }

    pop() {
        let current = this.head
        if (!current) return undefined
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return current.val;
        }
        while (current.next.next !== null) {
            current = current.next
        }
        let removed = current.next.val
        current.next = null
        this.tail = current
        this.length--;
        return removed
    }

    shift() {
        let removed = this.head;
        if (!removed) return undefined
        this.head = this.head.next;
        this.length--
        if (this.length === 0) this.tail = null
        return removed
    }

    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index > this.length) return null
        let getNode = this.head
        let counter = 0
        while (counter < index) {
            getNode = getNode.next
            counter++
        }
        return getNode
    }

    set(index, value) {
        var setNode = this.get(index)
        if (setNode) {
            setNode.val = value
            return true
        }
        else return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        else if (index === this.length) this.push(value)
        else if (index === 0) this.unshift(value)
        else {
            let prevNode = this.get((index - 1))
            let newNode = new Node(value)
            newNode.next = prevNode.next
            prevNode.next = newNode
        }
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false
        else if (index === this.length - 1) this.pop()
        else if (index === 0) this.shift()
        else {
            let prevNode = this.get((index - 1))
            removed = prevNode.next
            prevNode.next = removed.next
        }
        this.length--
        return removed

    }

    reverse() {
        if (this.length === 0) return null
        else {
            let next
            let prev = null
            let cur = this.head
            this.tail = cur
            while (cur) {
                next = cur.next
                cur.next = prev
                prev = cur
                cur = next
            }
            this.head = prev
        }
    }
}

let sll = new SinglyLinkedList();

sll.push(15);
sll.push(16);
sll.push(17);
sll.push(18)



sll.traverse()
sll.reverse()
sll.traverse()
