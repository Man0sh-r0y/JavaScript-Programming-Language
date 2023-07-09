// Write a program that takes a number and checks whether it is positive, negative, or zero.

function checkNum(num) {
    if (num == 0) return "Zero";
    else if(num > 0) return "Positive";
    else return "Negetive";
}

console.log(checkNum(-80));