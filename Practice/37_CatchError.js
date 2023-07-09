// Write a try-catch block that catches any errors a function throws and logs them to the console with a custom error message.

function myFunction(num) {
    try {
        if (typeof num !== 'number')
            console.log(new Error(`${num} is not a number`));
    } catch (error) {
        console.log(error.message);
    }
}

try {
  const result = myFunction("hello");
  console.log(result);
} catch (error) {
  console.log("Error caught:", error.message);
}