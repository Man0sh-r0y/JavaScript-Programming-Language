 function Sum(a,b) {
    return a + b;
}
console.log(Sum(1,2));// 3
console.log(Sum(1));// NaN (=> Not a number)
// not enough parameter. a=1, b=undefined
console.log(Sum());// NaN (=> Not a number)
// not enough parameter. a=undefined, b=undefined
console.log(Sum(1,2,3,4,5));// 3
// Only 1st 2 parameter is taken: a=1, b=2


function sum() {
    let total = 0;
    for(let value of arguments) // The arguments which are passed
        total = total + value;
    return total;
}
// We can pass any parameter to this function
console.log(sum(1,2));// 3
console.log(sum(1));// 1
console.log(sum());// 0
console.log(sum(1,2,3,4,5));// 15

