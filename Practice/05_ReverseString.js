// Write a program that displays a string in reverse order.

function stringReverse(str) {
    let revStr = str.split('').reverse().join('');
    return revStr;
}

str = "Manash";
console.log(stringReverse(str));