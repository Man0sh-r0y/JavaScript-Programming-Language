// Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
function sum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

console.log(sum(5));