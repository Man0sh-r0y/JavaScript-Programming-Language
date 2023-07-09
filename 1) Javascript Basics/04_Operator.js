// ArithMetic Operator
let a = 5;
let b = 2;
let c = a + b;
console.log(c);
let d = a - b;
console.log(d);
let e = a * b;
console.log(e);
let f = a / b;
console.log(f);
let g = a % b; // modulus
console.log(g);
let h = b ** a; // power: b^a 
console.log(h); // 2^5=32

a++; // Post increment
console.log(a); // a=6
console.log(a++); // atfirst value will be printed (=6) then it will be inrements then a=7

++b;// Pre increment
console.log(b); // b=3
console.log(b++); // 3 will be printed 1st then b=4

a--; // Post decrement
console.log(a); // a=6
console.log(a--); // atfirst value will be printed (=6) then it will be inrements then a=5

--b;// Pre decrement
console.log(b); // b=3
console.log(b--); // 3 will be printed 1st then b=2

// Asignment Operator
let num = 53;
console.log(num);
num /= 2;
console.log(num);
a = a * 3;
console.log(a);

// Comparison Operator
let p = 2;
let q = 3;
console.log(p == q);
console.log(p != q);
console.log(p < q);
console.log(p > q);
console.log(p <= q);
console.log(p >= q);
console.log(p === q);// strict equality
console.log(p !== q); 

let num2 = 1;
let str = '1';
console.log(str === num2); // False
console.log(str == num2); // True
// The difference between strict equailty and normal equiality is that for the strict equality, the data and the value both should be same.
// But in case of normal equality only value is checked wheather it's same or not.
let num1 = 1;
console.log(num1 === num2); // true --> strict equailty

// Ternary Operator
let age = 17;
let Status = (age >= 18) ? "You can Vote" : "You can't Vote";
console.log(Status);

// Logical Operator
let op1 = 2;// operand 1
let op2 = 3; // Operand 2
console.log(op1 && op2); // AND Operation
console.log(op1 || op2); // OR Operation
console.log(!op2); // NOT Operation

// Short Circuit in AND Operation
let result = (age > 18 && true);
console.log(result); // false

// Short Circuit in OR Operation
result= (true || age > 18);
console.log(result); // true

// BitWise Operator
let num3 = 2;
let num4 = 3;
console.log(num3 & num4); // Bitwise AND
console.log(num3 | num4); // Bitwise OR


// Operator Precedence
let Result = (a + ((b * d) / c));
console.log(Result);




