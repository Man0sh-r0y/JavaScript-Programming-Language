// Function Assignment
let add = function addTwoNumbers(a,b) {
    let sum = a+b;
    return sum; 
}

console.log(add(2, 4)); 
let AddNum = add;
console.log(AddNum(2, 4)); 
// But we can't do addTwoNumbers() 
console.log(addTwoNumbers(2, 4));// Error