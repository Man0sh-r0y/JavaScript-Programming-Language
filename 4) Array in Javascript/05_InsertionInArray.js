let arr = [1,2,5,4,7];
console.log(arr);

// Insertion at Beginning of Array
arr.unshift(10);// The unshift() method adds new elements to the beginning of an array. It overwrites the original array.
console.log(arr);


// Insertion at End of Array 
arr.push(8);
console.log(arr);


// Insertion at Middle 
arr.splice(3, 0, 100);//The splice() method adds and/or removes array elements. It overwrites the original array.
// Syntax: array.splice(index, howmany, item1, ....., itemX)
// index:	It's Required. It's The position to add/remove items The Negative value defines the position from the end of the array.
// howmany: It's Optional. It's Number of items to be removed.
// item1, ..., itemX: It's also	Optional. It's New elements(s) to be added.
console.log(arr);
