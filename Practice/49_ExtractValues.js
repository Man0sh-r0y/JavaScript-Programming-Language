// Write a function that takes an object and uses destructuring to extract the values of its properties and return them as an array.

function extractValues(obj) {
    // use object destructuring to extract the values of the object properties
    const { a, b, c } = obj;
    // return an array with the extracted values
    return [a, b, c];
}

let obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(extractValues(obj)); // [1, 2, 3]