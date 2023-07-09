// Searching  On Arrays
let arr = [1, 2, 5, 4, 7];
console.log(arr);

console.log(arr.indexOf(5)); //2
// The indexOf() method  returns the position of the first occurrence of a value in a string.
console.log(arr.indexOf(50)); //-1

console.log(arr.includes(5)); //true
// The includes() method returns true if a string contains a specified string. The includes() method is case sensitive. It's also applicable for Array Elements
console.log(arr.includes(50)); //false

arr.includes(4) ? console.log("Present") : console.log("Absent");// ternary Operator

arr.includes(14) ? console.log("Present") : console.log("Absent");// ternary operator