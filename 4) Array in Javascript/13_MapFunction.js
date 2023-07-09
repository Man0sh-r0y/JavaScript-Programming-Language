// map() creates a new array from calling a function for every array element.
// map() calls a function once for each element in an array.
// map() does not execute the function for empty elements.
// map() does not change the original array.

let arr = [1,23,53,5,6,53,5,4,43,45,7,48,67,8,7,4,6,7,8,5];
console.log(arr);

// Mapping Each Number to its corresponding Square
let arrSquare = arr.map(function (value) { return (value * value) });
console.log(arrSquare);
//[1,  529, 2809,   25,   36, 2809,   25,   16, 1849, 2025, 49, 2304, 4489,   64,   49, 16,   36,   49,   64,   25]

let objArray = arr.map(function(val) {return {Element : val}});// For each element in Array It's returning An Object. So This objArray is the Array of Objects
console.log(objArray); // => The OutPut:
/* [
  { Element: 1 },  { Element: 23 },
  { Element: 53 }, { Element: 5 },
  { Element: 6 },  { Element: 53 },
  { Element: 5 },  { Element: 4 },
  { Element: 43 }, { Element: 45 },
  { Element: 7 },  { Element: 48 },
  { Element: 67 }, { Element: 8 },
  { Element: 7 },  { Element: 4 },
  { Element: 6 },  { Element: 7 },
  { Element: 8 },  { Element: 5 }
] */

// Syntax: array.map(function(currentValue, index, arr), thisValue)

// Parameters:
/* function() => A function to run for each array element.*/
/* currentValue => The value of the current element.*/
/* index =>	It's Optional. The index of the current element.*/
/* arr =>	It's Optional.The array of the current element. */
/* thisValue =>	It's Optional. Its Default is undefined. A value passed to the function as its this value.*/

const persons = [
  {firstname : "Manash", lastname: "Roy"},
  {firstname : "Rahul", lastname: "Dey"},
  {firstname : "Souradip", lastname: "Kumar"}
];

let fullName=persons.map(getFullName);

function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}
console.log(fullName);// [ 'Manash Roy', 'Rahul Dey', 'Souradip Kumar' ]