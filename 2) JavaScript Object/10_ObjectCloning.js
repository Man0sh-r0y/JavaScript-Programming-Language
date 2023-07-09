let src = {
    a: 10,
    b: 20,
    c: 30
};
// This is an Object
let dest = {}; // This is an Empty Object

// Object Cloning Method-1 (by Iteration)
for (let key in src) {
    dest[key] = src[key];
}

console.log(dest);// { a: 10, b: 20, c: 30 }



// Object Cloning Method-2 (By Assign)
dest = {}; // empty object
dest = Object.assign({}, src);// cloning
// we can also clone mutiple objects's property in it
console.log(dest); // { a: 10, b: 20, c: 30 }


let src2 = { value: 25 };
let src3 = { color: 'red' };
dest = {}; // empty object
dest = Object.assign({}, src, src2, src3);
// cloning src on emty object => {}

console.log(dest);// { a: 10, b: 20, c: 30, value: 25, color: 'red' }


// Object Cloning Method-3 (By spread)
dest = {};// empty object
dest = { ...src };
console.log(dest);// { a: 10, b: 20, c: 30 }