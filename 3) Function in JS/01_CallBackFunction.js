// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback function
const posNumbers = removeNeg(myNumbers, function (num) { if(num>=0) return num });

// Print Result
console.log(posNumbers);// [ 4, 1, 5, 9 ]

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const num of numbers) {
    if (callback(num)) {// if callback(num) isn't undefined then only push
      myArray.push(num);
    }
  }
  return myArray;
}