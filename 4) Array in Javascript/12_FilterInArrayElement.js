let arr = [1,23,53,5,6,53,5,4,43,45,7,48,67,8,7,4,6,7,8,5];
console.log(arr);

// Filter which values are greater than 4 and divde by 4

let ans = arr.filter(function(value) {if( value > 4 && value % 4 === 0) return value});
// We can write this like:
// let ans = arr.filter(value => value > 4 && value % 4 === 0);
console.log(ans);// [ 48, 8, 8 ]

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// Syntax: array.filter(function(currentValue, index, arr), thisValue)

// Parameters:
/* function() => A function to run for each array element.*/
/* currentValue => The value of the current element.*/
/* index =>	It's Optional. The index of the current element.*/
/* arr =>	It's Optional.The array of the current element. */
/* thisValue =>	It's Optional. Its Default is undefined. A value passed to the function as its this value.*/