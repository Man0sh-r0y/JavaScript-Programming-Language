// Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

function countLetters(str) {
  const counts = {};// Create an empty object to store the letter counts
  for (let i = 0; i < str.length; i++) {// Loop through each character in the string
    const char = str[i];
    if (counts[char]) {// Check if the character is already in the counts object
      counts[char]++;// If it is, increment the count by 1
    } else {
      counts[char] = 1;  // If it's not, add it to the object with a count of 1
    }
  }
  return counts;
}

const letterCounts = countLetters("WebDevelopment");
console.log(letterCounts); // Output: { W: 1, e: 4, b: 1, D: 1, v: 1, l: 1, o: 1, p: 1, m: 1, n: 1, t: 1 }