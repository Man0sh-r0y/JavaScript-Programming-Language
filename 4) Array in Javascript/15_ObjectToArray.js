//ES6 introduces the Object.entries() method that allows you to transform an object into an array:
const boxStyle = {
    color: 'red',
    borderWidth: '1px'
};

let array = Object.entries(boxStyle);
console.log(array);// [ [ 'color', 'red' ], [ 'borderWidth', '1px' ] ]
// These are key-value Pairs