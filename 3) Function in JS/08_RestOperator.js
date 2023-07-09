//Rest Operator

function sum(num1, num2, ...args) {
    console.log("1st Parameter: " + num1);
    console.log("2nd Parameter: " + num2);
    console.log("Other Parameters: "+args);
}

// 1st value passed in parameter will be num1
// 2nd value passed in parameter will be num2
// Rest Other values passed will go to the args
// after the '...args', I can't write any other parameters

sum(1, 2, 3, 4, 5, 6);
// OUTPUT:
// 1st Parameter: 1
// 2nd Parameter: 2
// Other Parameters: 3,4,5,6

// we can write this also: 
function sum(num1, num2, ...OtherNums) {
    console.log("1st Parameter: " + num1);
    console.log("2nd Parameter: " + num2);
    console.log("Other Parameters: "+OtherNums);
}