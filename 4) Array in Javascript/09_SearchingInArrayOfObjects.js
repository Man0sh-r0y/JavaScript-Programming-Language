// Array of Object
let Persons = [
    { No: 1, Name: "Manash"},
    { No: 2, Name: "Rahul" },
    { No: 3, Name: "Payel" },
    { No: 4, Name: "Priya" },
    { No: 5, Name: "Riya"}
];


// Includes and indexOf doesn't work with references / Objects
console.log( Persons.includes({ No: 1, Name: "Manash"}));// false is prinitng


let findPeople = Persons.find(function(object) {
    return object.Name === "Manash";
});

console.log(findPeople);// { No: 1, Name: 'Manash' }

findPeople = Persons.find(function(object) {
    return object.Name === "Sakshi";
});

console.log(findPeople);// undefined

findPeople = Persons.find(object => object.Name === "Priya");
console.log(findPeople);// { No: 4, Name: 'Priya' }

// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.

// This method works not only on Object But also on array of primitive data type

// Syntax: array.find(function(currentValue, index, arr),thisValue)

// Parameters:
/* function() => A function to run for each array element.*/
/* currentValue => The value of the current element.*/
/* index =>	It's Optional. The index of the current element.*/
/* arr =>	It's Optional.The array of the current element. */
/* thisValue =>	It's Optional. Its Default is undefined. A value passed to the function as its this value.*/