//Arrow functions were introduced in ES6.
//Arrow functions allow us to write shorter function syntax:
let add = (a,b) => {
    return a + b;
}

console.log(add(2, 4));   

// Before Arrow Function:
hello = function() {
  return "Hello World!";
}
//With Arrow Function:
hello = () => {
  return "Hello World!";
}
// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
hello = () => "Hello World!";
//Arrow Function With Parameters:
hello = (val) => "Hello " + val;
//In fact, if you have only one parameter, you can skip the parentheses as well:
hello = val => "Hello " + val;//Arrow Function Without Parentheses
