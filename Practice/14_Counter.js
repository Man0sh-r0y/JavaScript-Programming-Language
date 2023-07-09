// Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

function createCounter() {
    let value = 0;
    return function () {
        value++;
        return value;
    }
}
let counter = createCounter();
console.log(counter());//1
console.log(counter());//2
console.log(counter());//3