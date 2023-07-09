// Write a function that takes an array of objects and returns the object with the highest value for a specified property name.

function getPropertyValue(arr, property) {
    let maxValue = arr[0][property];
    arr.forEach( element => maxValue = Math.max(maxValue, element[property]));
    return maxValue;
}

let people = [
    { Name: "Manash Roy", Age: 20, City: "Kolkata" },
    { Name: "Priya Sarkar", Age: 19, City: "Bangaluru" },
    { Name: "Anannya Halder", Age: 21, City: "Delhi" }
];

console.log(getPropertyValue(people, "Age"));