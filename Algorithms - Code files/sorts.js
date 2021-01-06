
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}
// var result=insertionSort([4,2,2,6,3,1,8,10,5]);
// console.log(result);

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let arr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        }
        else {
            arr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        arr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        arr.push(arr2[j]);
        j++
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([4, 2, 8, 6, 10, 89, 67, 90]));

