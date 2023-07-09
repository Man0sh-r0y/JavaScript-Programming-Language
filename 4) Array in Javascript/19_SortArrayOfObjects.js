let employees = [
    { firstName: 'John', lastName: 'Doe', age: 27, joinedDate: 'December 15, 2017' },
    { firstName: 'Ana', lastName: 'Rosy', age: 25, joinedDate: 'January 15, 2019' },
    { firstName: 'Zion', lastName: 'Albert', age: 30, joinedDate: 'February 15, 2011' }
];// Array Of Objects

// sort by their age (in increasing order)
let sortArray = employees.sort(function(a, b) { return a.age - b.age});
console.log(sortArray);

// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.

// Sort by their age (in decreasing Order)
employees.sort((a, b) => b.age - a.age);
// printing
employees.forEach((object) => {
    console.log(`${object.firstName} ${object.lastName} ${object.age}`);
});

//Sort an array of objects by strings
employees.sort((a, b) => {
    let fa = a.firstName.toLowerCase(),
        fb = b.firstName.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
console.log(employees);