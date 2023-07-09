// Write a function that takes an array of numbers and uses the spread operator to find the maximum value.

function findMaxValue(arr) {
    return Math.max(...arr);// passing each element of the array as individual arguments to the `Math.max()` function.
}

console.log(findMaxValue([1, 2, 3, 4, 5])); // 5