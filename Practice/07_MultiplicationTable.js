// Write a program that takes a number and prints the multiplication table for that number.

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${num*i}`);
    }
}

multiplicationTable(2);