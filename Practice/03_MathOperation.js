// Write a program that takes two numbers and displays their sum, difference, product, and quotient.
function operation(a,b) {
    const sum = a + b;
    const difference = a - b;
    const product = a * b;
    const quotient = a / b;
    console.log("Sum is " + sum + "\nDifference is " + difference + "\nProduct is " + product + "\nQuotient is " + quotient);
}

operation(10, 5);