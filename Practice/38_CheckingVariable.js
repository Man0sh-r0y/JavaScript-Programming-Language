// Write a function that uses console.assert to check whether a variable is equal to a certain value, and throws an error if the assertion fails.

function assertEqual(actual, expected) {
    if (actual === expected) {
        console.log(`${actual} is equal to ${expected}`);
        return;
    }
    console.assert(actual === expected, `Expected ${expected}, but got ${actual}`);
    // The assert() method writes a message to the console if an expression evaluates to false.
}

assertEqual(5, "hello");
// OUTPUT:
// Assertion failed: Expected hello, but got 5