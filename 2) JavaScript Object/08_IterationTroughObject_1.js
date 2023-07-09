// at first creating an object
let rectangle = {
    length: 2,
    breadth:4
}

// length and breadth are the keys of the object. 2 and 4 are the values of these keys
console.log(typeof (rectangle));// object

// Iteration using for-in-loop
for (let key in rectangle) {
    console.log(key);
    // length
    // breadth --> this 2 things will be printed
}

for (let key in rectangle) {
    console.log(rectangle[key]);
    // The values will be printed:
    //2 
    //4
}

// we can print also like this
for (let i in rectangle) {
    // the keys and values will be printed
    console.log(i, rectangle[i]);
}