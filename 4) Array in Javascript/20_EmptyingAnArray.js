// Three ways to Empty an Array 
// #1 - arr - []
let arr = [1,2,5,4,7];
console.log(arr);// [ 1, 2, 5, 4, 7 ]

let arr1 = arr;

arr = []
console.log(arr);// []  => Empty
console.log(arr1);// [ 1, 2, 5, 4, 7 ]
// Here arr is an Array. arr1 is pointing to the same Array.
// When we do arr=[], arr now pointing to a blank Array. It doesn't mean that The Array elements has been removed.
// if we print arr1, we can get the Array Element.


// #2 - length = 0 
let arr2 = arr1;
arr1.length = 0;
console.log(arr1);// []
console.log(arr2);// []
// in this method Array Element actually gets removed.

// #3 - splice 
let array = [1,5,6,7,8,9];
console.log(array);// [ 1, 5, 6, 7, 8, 9 ]
// in this method also Array Element actually gets removed.
array.splice(0, array.length);// []
// This method says starts index from 0 and remove element till its length.
console.log(array);

// Method-2 and Method-3 are the best method for emptying an Array