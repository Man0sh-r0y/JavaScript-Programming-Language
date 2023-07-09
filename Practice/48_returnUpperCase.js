// Write a function that takes an array of strings and returns a new array with all the strings in uppercase.

function returnUpperCase(arr) {
    return arr.map(str => str.toUpperCase());
}

console.log(returnUpperCase(["hello", "world"]));