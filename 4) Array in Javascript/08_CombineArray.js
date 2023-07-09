// Combines two array Using .concat() Function
let first = [1, 2, 3, 4];
let second = [4, 3, 2, 1];

console.log(first, second);// [ 1, 2, 3, 4 ] [ 4, 3, 2, 1 ]

let combineArray = first.concat(second);// [  1, 2, 3, 4, 4, 3, 2, 1]
// The concat() method joins two or more Arrays.
// It returns a new array, containing the joined arrays.
// This method does not change the existing arrays.
console.log(combineArray);
console.log(typeof (combineArray));// object

// Combine Array Using Spread Operator
// Combines two array
let First = [1, 2, 3, 4];
let Second = [4, 3, 2, 1];

let combine = [...First, ...Second];
console.log(combine); // [1, 2, 3, 4, 4, 3, 2, 1]

combine = [...First, ...Second, "abc"];
console.log(combine);// // [1, 2, 3, 4, 4, 3, 2, 1, 'abc']