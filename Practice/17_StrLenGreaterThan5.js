// Write a function that takes an array of strings as an argument
// and returns a new array with only the strings that have a length greater than 5.

function strArray(arr) {
    let newArr = arr.filter(function (element) { if (element.length > 5) return element });
    return newArr;
}

let arr = ["Hello", "Manash", "Roy", "GoodMorning"];
console.log(strArray(arr));
