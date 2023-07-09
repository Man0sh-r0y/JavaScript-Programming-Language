//  performance.now() method can be used to check the performance of your code.
// You can check the execution time of your code using this method.

let t1 = performance.now();

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let t2 = performance.now();

console.log(`This for loop is taking ${t2-t1} miliseconds`);