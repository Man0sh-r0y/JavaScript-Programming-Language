let arr = [1,2,3,4,5,6];
console.log(arr);// [ 1, 2, 3, 4, 5, 6 ]

// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
// Syntax : array.slice(start, end)
let newArray = arr.slice();
console.log(newArray);// [ 1, 2, 3, 4, 5, 6 ]

newArray = arr.slice(0, -1);// Start=0, End = (ArrayLength -1) = 5
// When Ever I'll see -ve indx just subtract it from Array Length. I'll get the end indx
console.log(newArray);// [ 1, 2, 3, 4, 5 ]

newArray = arr.slice(2,5);
console.log(newArray);// [ 3, 4, 5 ]

// If We put start indx and end indx, It always goes from start indx to (end indx - 1)