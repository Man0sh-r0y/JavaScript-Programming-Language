//It is a function that does not have any name associated with it.
//Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript,
//we use only the function keyword without the function name.

//An anonymous function is not accessible after its initial creation,
//it can only be accessed by a variable it is stored in as a function as a value.
//An anonymous function can also have multiple arguments, but only one expression.

let a = function() {// Syntax:
    // Function Body
}


let add = function (a, b)// function with no name
{
    let sum = a+b;
    return sum; 
}

console.log(add(2, 4));   

// We may also declare an anonymous function using the arrow function technique
// Syntax:
( () => {
    // Function Body...
} )();