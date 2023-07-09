// Write a function that takes an object and returns an array of all the keys in the object.

function getKeys(obj) {
    let keyList = [];
    for (let key in obj) {
        keyList.push(key);
    }
    return keyList;
}

let obj = {
    Name: "Manash Roy",
    Age: 20,
    City: "Kolkata",
    occupation: "Student",
    Degree: "Btech",
    Branch: "CSE"
}

console.log(getKeys(obj));

// another method
function getKeys(arr) {
    const keys = Object.keys(obj);
    return keys;
}