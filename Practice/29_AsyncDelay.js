// Write a function to simulate an asynchronous delay using a callback.

console.log("Before Delay: ");

simulateDelay();

console.log("Delaying... ");

function simulateDelay() {
    setTimeout(() => {
        console.log('Function Finished executing');
    }, 3000);
}

// OUTPUT:
// Before Delay: 
// Delaying... 
// Function Finished executing
