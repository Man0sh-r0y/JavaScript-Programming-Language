let first = [1, 2, 3, 4];

first.forEach(function (element) { console.log(element) });
// I can write it like this:
first.forEach(element => console.log(element));// Arrow Function is used here. Going to each element and prnt

// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.

// Syntax: array.forEach(function(currentValue, index, arr), thisValue)

// Parameters:
/* function() => A function to run for each array element.*/
/* currentValue => The value of the current element.*/
/* index =>	It's Optional. The index of the current element.*/
/* arr =>	It's Optional.The array of the current element. */
/* thisValue =>	It's Optional. Its Default is undefined. A value passed to the function as its this value.*/

let sum = 0;
const numbers = [65, 44, 12, 4];//Variables defined with const cannot be Redeclared. Variables defined with const cannot be Reassigned. Variables defined with const have Block Scope.
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(numbers);// [ 65, 44, 12, 4 ]
console.log(sum);// 125

function myFunction(item, index, arr) {// Same name function with different Parameter => Function Overloading
  arr[index] = item * 10;
}
console.log(numbers);// [ 650, 440, 120, 40 ]