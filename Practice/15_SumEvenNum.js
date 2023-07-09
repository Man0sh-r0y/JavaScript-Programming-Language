// Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

function sumEvenNum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 != 0) {
            sum += arr[i];
        }
    }
    return sum;
}

let arr = [2, 5, 7, 6, 8, 9, 1];
console.log(sumEvenNum(arr));