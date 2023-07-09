// creating object
let a = {
    length: 2,
    breadth: 3
};

console.log(a);

a.color = 'red';
a.value = 10;
// now this 2 property is added
console.log(a); 

delete a.color;
delete a.value;
// Now added 2 property is deleted
console.log(a); 

// This is the dynamic Nature of the Object