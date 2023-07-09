// In JavaScript, a closure is a function that references variables in the outer scope from its inner scope.
// A function can access all variables defined inside the function (As Local variable)
// But a function can also access variables defined outside the function (As Global variable)
function outer() {
    const Name = "Manash";
    function inner() {
        console.log("Hi !" + `${Name}`);
    }
    return inner;
};

const greeting = outer();
greeting();

// A function can't be revoked or called, Untill we call that function

// We can write multiple nested function in a function.
// here comes the closure concept
// In the above example, there is a nested function.
// When we call the outer function, the inner function would be called
// untill we we are calling inner function inside the outer function
// so when we are calling outer function, the inner function is going to be returned
// we know that when any function is returned, it will be removed from call stack
// so local variables will not be used anymore
// so according to that when inner function is going to return , then outer function would not be there in call stack
// so we are not supposed to get the access of 'Name' variable
// but when are calling greeting(), Name is going to be printed
// here comes the closure concept
// When nested function happens, the closure of the functions are going to create
// Whichever data inner function required ( here Name variable ), its reference would be stored in closure
// not any copy, reference will gonna be stored
// so when the parent function will be removed from call stack
//  then also inner function can access the required all the data which are in parent function 
// as their reference are already stored in closure of that function



// Another example:
const func = function() {
  const x = function() {
    let a = 10;
    console.log(a);
    const y = function() {
      console.log(a);
      const z = function() {
        console.log(a);
      };
      z();// when we calling Z(), then only Z() function code will be executed
    };
    a = 69;// function closure is storing the refenrence of a, 
    // so here value of 'a' is changed, so it's changed everywhere
    y();// when we calling y(), then only y() function code will be executed
  };
  return x;// function x() is being returned
};
// A function will be invoked untill we are calling it

let x = func();
x(); // 10 69 69