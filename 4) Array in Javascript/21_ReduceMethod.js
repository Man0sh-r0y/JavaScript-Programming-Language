// The reduce() method executes a reducer function on each element of the array and returns a single output value.
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

let arr = [1,2,4,5,6];
let sum = arr.reduce(function (totalSum, val) { return (totalSum + val) },0);
console.log(sum);// 18

// Syntax: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

/* function() => A function to run for each array element.*/

// Parameters:
/* total => The initialValue, or the previously returned value of the function.*/
/* currentValue =>	The value of the current element.*/
/* currentIndex =>	It's Optional.The index of the current element. */
/* arr => It's Optional. The array the current element belongs to. */
/* initialValue =>	It's Optional.A value to be passed to the function as the initial value.*/


// Grouping Objects by a property
let people = [
  { name: "John", age: 21 },
  { name: "Oliver", age: 55 },
  { name: "Michael", age: 55 },
  { name: "Dwight", age: 19 },
  { name: "Oscar", age: 21 },
  { name: "Kevin", age: 55 },
];
// This is an Array of Objects
console.log(typeof people)// Object

function groupBy(objectArray, property) {
  return objectArray.reduce(function (accumulator, currentObject) {
    let key = currentObject[property];
    if (!accumulator[key]) {// accumulator is an Object. It has keys with its values. If values are not present in the given key, then an empty array will be specified as its value of the given key
        // As for each key (age priperty), There might be more than 1 person, So we should take an Array as the key's value
      accumulator[key] = [];// for each key, there will be an array (value of the given key)
    }
    accumulator[key].push(currentObject);// pushing Objects in its key valus. In a key there might be many objects as value of key is an Array 
    return accumulator;
  }, {});// Here initialValue is defined as an Object => {}. So accumulator is an object
}

let groupedPeople = groupBy(people, "age");// grouping people based on their age
console.log(typeof groupedPeople);// Object
console.log(groupedPeople);
/* 
{
  '19': [ { name: 'Dwight', age: 19 } ],
  '21': [ { name: 'John', age: 21 }, { name: 'Oscar', age: 21 } ],
  '55': [ { name: 'Oliver', age: 55 }, { name: 'Michael', age: 55 }, { name: 'Kevin', age: 55 } ]
} 
*/

// Remove Dublicates from Array
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let uniqueAgeGroup = ageGroup.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);// here initialValue is empty array => [], so accumulator is an Array

console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]