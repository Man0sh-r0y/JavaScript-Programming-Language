// Write a function that takes an array of objects and returns an array of all the values of a specified property name.
function getPropertyValues(arr, property) {
    let values = [];// list of object values of the property
    arr.forEach( element => values.push(element[property]));
    return values;
}

let people = [
    { Name: "Manash Roy", Age: 20, City: "Kolkata" },
    { Name: "Priya Sarkar", Age: 19, City: "Bangaluru" },
    { Name: "Anannya Halder", Age: 21, City: "Delhi" }
];

console.log(getPropertyValues(people, "Name"));
