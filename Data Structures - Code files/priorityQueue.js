class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class priorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(value, priority) {

        let newNode = new Node(value, priority)
        this.values.push(newNode)

        let index = this.values.length - 1
        let element = this.values[index]

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (parent.priority <= element.priority) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;

            index = parentIndex;
        }
    }

    dequeue() {
        let removed = this.values[0]

        this.values[0] = this.values.pop()

        let parentIndex = 0

        while (true) {

            let leftIndex = (2 * parentIndex) + 1
            let rightIndex = (2 * parentIndex) + 2

            let leftValue, rightValue, greaterValue
            leftValue = rightValue = greaterValue = new Node(null, Infinity)

            let parentValue = this.values[parentIndex]

            if (leftIndex < this.values.length) leftValue = this.values[leftIndex]
            if (rightIndex < this.values.length) rightValue = this.values[rightIndex]


            let greaterIndex = leftValue.priority <= rightValue.priority ? leftIndex : rightIndex

            if (greaterIndex < this.values.length) greaterValue = this.values[greaterIndex]


            if (parentValue.priority >= greaterValue.priority) {
                this.values[greaterIndex] = this.values[parentIndex]
                this.values[parentIndex] = greaterValue
                parentIndex = greaterIndex

            }

            else break
        }

        return removed
    }
}



