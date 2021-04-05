class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert(value) {

        this.values.push(value)

        let index = this.values.length - 1
        let element = this.values[index]

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (parent >= element) break;

            this.values[parentIndex] = element;
            this.values[index] = parent;

            index = parentIndex;
        }
    }

    extractMax() {
        let removed = this.values.pop()

        this.values[0] = removed

        let parentIndex = 0

        while (true) {

            let leftIndex = (2 * parentIndex) + 1
            let rightIndex = (2 * parentIndex) + 2

            let leftValue, rightValue = 0

            let parentValue = this.values[parentIndex]

            if (leftIndex < this.values.length) leftValue = this.values[leftIndex]
            if (rightIndex < this.values.length) rightValue = this.values[rightIndex]


            let greaterIndex = leftValue > rightValue ? leftIndex : rightIndex
            let greaterValue = this.values[greaterIndex]

            if (parentValue < greaterValue) {
                this.values[greaterIndex] = this.values[parentIndex]
                this.values[parentIndex] = greaterValue
                parentIndex = greaterIndex
            }
            else break
        }

        return removed
    }
}

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);


console.log(heap.values);

heap.extractMax()

console.log(heap.values)

heap.extractMax()

console.log(heap.values)

heap.extractMax()

console.log(heap.values)
