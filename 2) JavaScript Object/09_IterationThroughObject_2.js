// at first creating an object
let rectangle = {
    length: 2,
    breadth:4
}
// Iteration using  for-of loop 
// that's how I have to print keys with values of this object
for (let key of Object.entries(rectangle)) {
    console.log(key);
//     This will be printed
//     [ 'length', 2 ]
//     [ 'breadth', 4 ]
}