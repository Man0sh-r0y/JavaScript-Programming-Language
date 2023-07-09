// 4. **Write a function that takes two numbers as arguments and returns the larger number.**

function largeNum(a, b) {
    let num = (a > b) ? a : b;
    return num;
}

console.log(largeNum(2, 4));