let arr = [1,2,3,4,5,6];

console.log(arr.filter(val => val > 2));// [ 3, 4, 5, 6 ]
// Returining the values who are greater than 2
console.log(arr.filter(val => val > 2).map(num => num * num));// [ 9, 16, 25, 36 ]
// then map them, map retuns a new array. 

// Chaining
let chain = arr.filter(val => val > 2).map(num => num*num).filter(val => val&1);
// .filter(val=> val&1) means return the values whose (value & 1) gives 1.
console.log(chain);// [ 9, 25 ]

