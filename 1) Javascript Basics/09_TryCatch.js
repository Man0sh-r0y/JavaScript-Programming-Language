// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// You can also use the try...catch...finally statement to handle exceptions. The finally block executes both when the code runs successfully or if an error occurs.
// The throw statement defines a custom error.

let x = 5; 
try {
  x = y + 1;   // y isn't decleared
}
catch(err) {
  console.log("Error !");
}

// Another example: 
const numerator= 100, denominator = 'a';

try {
     console.log(numerator/denominator);
     console.log(a);
}
catch(error) {
    console.log('An error caught'); 
    console.log('Error message: ' + error);  
    // Error message: ReferenceError: a is not defined
}
finally {
     console.log('Finally will execute every time');
}

// Another example:
try {
     if(number > 50) {
        console.log('Success');
    }
    else {

        // user-defined throw statement
        throw new Error('The number is low');
    }

    // if throw executes, the below code does not execute
    console.log('hello');

} catch(error) {
    console.log(error); 
}
