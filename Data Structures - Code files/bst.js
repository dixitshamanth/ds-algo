class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = new Node(value);
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = new Node(value);
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    find(key) {
        if (!this.root) return undefined;
        let current = this.root;
        while (true) {
            if (current.value === key) {
                return current;
            }
            if (key < current.value) {
                if (!current.left) return undefined;
                current = current.left;
            }
            else {
                if (!current.right) return undefined;
                current = current.right;
            }
        }
    }

    BFS() {
        let visited = []
        let queue = []

        queue.push(this.root)
        while (queue.length !== 0) {
            let removed = queue.shift()
            visited.push(removed.value)
            if (removed.left) queue.push(removed.left)
            if (removed.right) queue.push(removed.right)
        }
        return visited
    }

    DfsPreOrder() {
        let visited = []
        function traverse(node) {
            visited.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited
    }

    DfsPostOrder() {
        let visited = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.value)
        }
        traverse(this.root)
        return visited

    }

    DfsInOrder() {
        let visited = []
        function traverse(node) {
            if (node.left) traverse(node.left)
            visited.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited

    }
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(7)
tree.insert(5)
tree.insert(8)
tree.insert(12)
tree.insert(11)
tree.insert(14)
console.log(tree.DfsPostOrder())

