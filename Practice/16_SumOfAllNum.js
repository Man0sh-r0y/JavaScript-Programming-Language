// Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
function sum(arr) {
    let sum = arr.reduce((totalSum, element) => totalSum + element, 0);
    return sum;
}

let arr = [1, 2, 3, 4, 5];
console.log(sum(arr));