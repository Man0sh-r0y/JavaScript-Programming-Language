// ES2019 introduced the Object.fromEntries() method that allows you to easily convert a list of key-value pairs into an object.

let array = [['color', 'red'], ['borderWidth', '1px']];
let object = Object.fromEntries(array);
console.log(object);// { color: 'red', borderWidth: '1px' }