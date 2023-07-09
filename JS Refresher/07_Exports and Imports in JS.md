# Exports and Imports in JS

In JavaScript, the `export` and `import` statements are used to define and consume modules respectively. A module is a reusable piece of code that can be imported and used in other parts of your program. In this article, we'll explore how to use `export` and `import` statements in JavaScript with five examples to help you understand how to use them effectively.

## **Example 1: Exporting a Function**

Suppose we have a file named `math.js` that exports a function to add two numbers:

```jsx
// math.js

export function add(a, b) {

return a + b;

}
```

To use the `add()` function in another file, we need to import it using the `import` statement:

```jsx
// app.js

import { add } from './math.js';

const result = add(2, 3);

console.log(result); // 5
```

In this example, we use the curly braces `{}` to specify which named export we want to import from the `math.js` file. We then use the `add()` function to compute the sum of two numbers.

## **Example 2: Exporting a Class**

We can also export a class from a module:

```jsx
// person.js

export class Person {

	constructor(name, age) {

		this.name = name;

		this.age = age;

	}

	sayHello() {

		console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);

	}

}
```

To use the `Person` class in another file, we can import it using the `import` statement:

```jsx
// app.js

import { Person } from './person.js';

const john = new Person('John', 30);

john.sayHello(); // "Hello, my name is John and I'm 30 years old."
```

In this example, we create a new instance of the `Person` class and call its `sayHello()` method.

## **Example 3: Exporting Multiple Functions and Classes**

We can export multiple functions and classes from a module using the `export` statement:

```jsx
// utils.js

export function add(a, b) {

	return a + b;

}

export function subtract(a, b) {

	return a - b;

}

export class Person { 

	constructor(name, age) {

		this.name = name;

		this.age = age;
	}

	sayHello() {

		console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);

	}

}
```

To use the exported functions and classes in another file, we can import them using the `import` statement:

```jsx
// app.js

import { add, subtract, Person } from './utils.js';

const result1 = add(2, 3);

const result2 = subtract(5, 2);

const john = new Person('John', 30);

john.sayHello(); // "Hello, my name is John and I'm 30 years old."
```

In this example, we import the `add()` and `subtract()` functions as well as the `Person` class from the `utils.js` module and use them in our application.

## **Example 4: Default Exports**

We can also export a single default value from a module using the `export default` statement:

```jsx
// greet.js

export default function greet(name) {

	console.log(`Hello, ${name}!`);

}
```

To import the default export, we can use any name we want:

```jsx
// app.js

import sayHello from './greet.js';

sayHello('John'); // "Hello, John!"
```