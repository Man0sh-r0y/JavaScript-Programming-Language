let a = 10;
let b = a;
a++;
console.log(a);// 11
console.log(b);// 10
// As 'a' does n't have any reference and the value of a is just stored in b. So 'b' isn't updated when 'a' is updated

// But object have reference
let c = { value: 10 };
b = c;
c.value++;
console.log("value of c = " + c.value);// 11
console.log("value of b = " + b.value);// 11
// As Object has reference. So when we store the 'c' object in the 'b' then 'b' also becomes an object. And it's pointing to the same object 'c'. 'b' is not a diffrent object.

function increment(c) {
    c.value++;
}
increment(c);// call by reference
console.log(c);// { value: 12 }
console.log(b);// { value: 12 }
