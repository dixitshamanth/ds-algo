function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        // var flag1 = 0;
        // var flag2 = 0;
        for (var j = 0; j < arr2.length; j++) {

            if (arr2[j] === (arr1[i] ** 2)) {
                arr2.splice(j, 1);
                break;
            }
            //     if(flag1===0){
            //         flag1=1;
            //     }else{
            //         flag2=1;
            //         continue;
            //     }
            // }
        }

    }
    if (arr2.length === 0) {
        return true;
    }
    else {
        return false;
    }

}

//Frequency counter problems:
//Create one or two objects that store the frequency of occurence of necessaty data. 
//Traverse through laater with required logic

function validAnagram(str1, str2) {

    var obj1 = {};
    var obj2 = {};
    for (let i of str1) {
        obj1[i] = (obj1[i] || 0) + 1;
    }
    for (let j of str2) {
        obj2[j] = (obj2[j] || 0) + 1;
    }
    console.log(obj1);
    console.log(obj2);
    for (let p of str1) {
        if (!(p in obj2)) {
            return false;
        }
        if (obj1[p] !== obj2[p]) {
            return false;
        }
    }
    return true;
}

//Multiple pointers problems:
//Have two pointers starting from one end moving towards other checking for conditions
//Avoids n2 traversal
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var i = 0;
    var j = 1;
    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return i + 1;
}

function naiveStringSearch(str, key) {
    var count = 0;
    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < key.length; j++) {

            if (key[j] !== str[i]) {
                break;
            } else {
                i++;
            }
            if (j === (key.length - 1)) {
                count++;
            }
        }
    }
    return count;
}

// let result = naiveStringSearch('hahaomghjiiomhii io mg','omg');
// console.log("Count is "+result);
