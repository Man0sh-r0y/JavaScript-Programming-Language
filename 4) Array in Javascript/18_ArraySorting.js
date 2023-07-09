let arr = [10,45,30,46,5,14,67,46];
console.log(arr);// [10, 45, 30, 46, 5, 14, 67, 46 ]

arr.sort();// The sort() method sorts an array alphabetically. 
console.log(arr); // This sort function sort as a string
//[10, 14, 30, 45,46, 46,  5, 67 ]

// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// so we have to sort by callback function 
let sortedArray = arr.sort(function (a, b) { return a - b });// This is compare function
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

// If the result is negative, a is sorted before b.

// If the result is positive, b is sorted before a.

// If the result is 0, no changes are done with the sort order of the two values.
console.log(sortedArray);   //[5, 10, 14, 30,45, 46, 46, 67]