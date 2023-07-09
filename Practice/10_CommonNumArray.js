// Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays,
// without any duplicates.The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].

function commonElements(arr1, arr2) {
    let arrayList=[];// initialize with empty
    for (let i = 0; i < arr1.length; i++){
        if (arr2.includes(arr1[i])) {
            if (!arrayList.includes(arr1[i])) {// prevent dublicate
                arrayList.push(arr1[i]);
            }
        }
    }
    arrayList.sort((a, b) => a - b);
    return arrayList;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log(commonElements(arr1, arr2));