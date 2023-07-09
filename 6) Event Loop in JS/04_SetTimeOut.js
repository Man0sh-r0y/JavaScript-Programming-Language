//The setTimeout() method calls a function after a number of milliseconds.
//1 second = 1000 milliseconds.

setTimeout(() => {
    console.log("This will Print after 5 Seconds");
}, 5000);// after 5 sec

//The setTimeout() is executed only once.
//If you need repeated executions, use setInterval() instead.
//Use the clearTimeout() method to prevent the function from starting.