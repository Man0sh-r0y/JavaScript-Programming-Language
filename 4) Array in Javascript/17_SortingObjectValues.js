const maxSpeed = {
    car: 300, 
    bike: 60, 
    motorbike: 200, 
    airplane: 1000,
    helicopter: 400, 
    rocket: 8 * 60 * 60
};

//ES6 introduces the Object.entries() method that allows you to transform an object into an array
// ES2019 introduced the Object.fromEntries() method that allows you to easily convert a list of key-value pairs (Array form) into an object

let arr = Object.entries(maxSpeed);// Object to Array
// arr => [ [ 'car', 300 ], [ 'bike', 60 ], [ 'motorbike', 200 ],['airplane', 1000 ], [ 'helicopter', 400 ], [ 'rocket', 28800 ] ] 
// These are key-value Pairs
arr.sort(function (a, b) { return a[1] - b[1] });// as I want to sort according to values of object and this values are in index 1 of each key-value pair
// arr => [ [ 'bike', 60 ], [ 'motorbike', 200 ], [ 'car', 300 ], [ 'helicopter', 400 ], [ 'airplane', 1000 ], [ 'rocket', 28800 ] ]
let sortedObject = Object.fromEntries(arr);// Array To Object
console.log(sortedObject);
/*
{
  bike: 60,       
  motorbike: 200, 
  car: 300,       
  helicopter: 400,
  airplane: 1000, 
  rocket: 28800   
} 
*/

/* I can write above codes in a short form: */
const sortable = Object.fromEntries(
  Object.entries(maxSpeed).sort((a, b) => a[1] - b[1])
);
// Now printing the Object
console.log(sortable);
