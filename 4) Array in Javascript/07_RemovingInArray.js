let arr = [1,2,5,4,7];
console.log(arr);//Output: [ 1, 2, 5, 4, 7 ]

// Remove at Beginning of Array
arr.shift();
console.log(arr);//Output: [ 2, 5, 4, 7 ]


// Remove at End of Array 
arr.pop();
console.log(arr);//Output: [ 2, 5, 4 ]


// Remove at Middle 
arr.splice(1, 2); // Output: [2]  => from the index 1, 2 elemnts are removed
//The splice() method adds and/or removes array elements. It overwrites the original array.
// Syntax: array.splice(index, howmany, item1, ....., itemX)
// index:	It's Required. It's The position to add/remove items The Negative value defines the position from the end of the array.
// howmany: It's Optional. It's Number of items to be removed.
// item1, ..., itemX: It's also	Optional. It's New elements(s) to be added.
console.log(arr);
