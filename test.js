var twoSum = function (nums, target) {

    let ind = []
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                ind.push(i);
                ind.push(j);
                return ind;
            }
        }
    }
}

console.log(twoSum([1, 3, 5, 8], 8))