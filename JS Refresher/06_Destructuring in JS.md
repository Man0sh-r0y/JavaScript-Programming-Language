# Destructuring in JS

Destructuring is a powerful feature in JavaScript that allows you to extract values from arrays and objects and assign them to variables. It was introduced in ES6 (ECMAScript 2015) and has become an essential tool for writing modern JavaScript code.

## **Destructuring Arrays**

Let's start with an example of destructuring an array:

```jsx
const numbers = [1, 2, 3];

const [a, b, c] = numbers;

console.log(a); // output: 1

console.log(b); // output: 2

console.log(c); // output: 3
```

In this example, we've used destructuring to assign the first value of the `numbers` array to the variable `a`, the second value to `b`, and the third value to `c`. We could also use destructuring to assign the first two values to variables and ignore the third value:

```jsx
const numbers = [1, 2, 3];

const [a, b] = numbers;

console.log(a); // output: 1

console.log(b); // output: 2
```

Destructuring also works with nested arrays:

```jsx
const numbers = [1, [2, 3]];

const [a, [b, c]] = numbers;

console.log(a); // output: 1

console.log(b); // output: 2

console.log(c); // output: 3
```

In this example, we've used destructuring to assign the first value of the `numbers` array to `a`, and the second value (which is another array) to `[b, c]`. Then we've used destructuring again to assign the first value of the `[b, c]` array to `b` and the second value to `c`.

We can also use default values with destructuring in case an array is empty or a value is undefined:

```jsx
const numbers = [1];

const [a = 0, b = 0] = numbers;

console.log(a); // output: 1

console.log(b); // output: 0
```

In this example, we've used destructuring to assign the first value of the `numbers` array to `a` and the second value (which is undefined) to `b`. Then we've used default values to assign `0` to `b` in case it's undefined.

## **Destructuring Objects**

Destructuring also works with objects:

```jsx
const person = { name: 'John', age: 30 };

const { name, age } = person;

console.log(name); // output: "John"

console.log(age); // output: 30
```

In this example, we've used destructuring to assign the `name` property of the `person` object to the variable `name` and the `age` property to the variable `age`.

We can also use destructuring to assign properties with different variable names:

```jsx
const person = { name: 'John', age: 30 };

const { name: personName, age: personAge } = person;

console.log(personName); // output: "John"

console.log(personAge); // output: 30
```

In this example, we've used destructuring to assign the `name` property of the `person` object to the variable `name`, the `age` property to the variable `age`, and the `city` property of the `address` object to the variable `city`.

We can also use default values with destructuring in case a property is undefined:

```jsx
const person = { name: 'John', age: 30 };

const { name, age, gender = 'male' } = person;

console.log(name); // output: "John"

console.log(age); // output: 30

console.log(gender); // output: "male"
```

In this example, we've used destructuring to assign the `name` property of the `person` object to the variable `name`, the `age` property to the variable `age`, and the `gender` property (which is undefined) to the variable `gender`. Then we've used a default value to assign `"male"` to `gender` in case it's undefined.

## **Conclusion**

Destructuring is a powerful feature in JavaScript that can help you write more concise and efficient code. It allows you to extract values from arrays and objects and assign them to variables in a simple and readable way. By understanding how to use destructuring, you can write cleaner and more maintainable code.