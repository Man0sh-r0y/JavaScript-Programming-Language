# Spread & Rest Operator in JS

In JavaScript, the spread and rest operators are powerful features that allow you to work with arrays and objects more easily. They were introduced in ES6 (ECMAScript 2015) and have been widely adopted in modern JavaScript code.

## **Spread Operator**

The spread operator (`...`) is used to expand an iterable (like an array) into individual elements. Here's an example:

```jsx
const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3); // output: [1, 2, 3, 4, 5, 6]
```

In this example, we've used the spread operator to concatenate two arrays `arr1` and `arr2` into a new array `arr3`. The spread operator allows us to write more concise code and avoid using `concat()` or a loop.

The spread operator can also be used to copy an array:

```jsx
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log(arr2); // output: [1, 2, 3]
```

In this example, we've used the spread operator to copy the `arr1` array into a new array `arr2`.

The spread operator can also be used to spread an array into function arguments:

```jsx
function sum(a, b, c) {

	return a + b + c;

}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); // output: 6
```

In this example, we've used the spread operator to pass the `numbers` array as individual arguments to the `sum()` function.

The spread operator can also be used to create a new array with additional elements:

```jsx
const arr1 = [1, 2, 3];

const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // output: [1, 2, 3, 4, 5, 6]
```

In this example, we've used the spread operator to create a new array `arr2` that includes the elements of `arr1` as well as the additional elements `4`, `5`, and `6`.

## **Rest Operator**

The rest operator (`...`) is used to represent an indefinite number of arguments as an array. Here's an example:

```jsx
function sum(...numbers) {

	let result = 0

	for (let i = 0; i < numbers.length; i++) {

		result += numbers[i];

	}

	return result;

}

console.log(sum(1, 2, 3)); // output: 6

console.log(sum(1, 2, 3, 4, 5)); // output: 15
```

In this example, we've used the rest operator to represent an indefinite number of arguments as the `numbers` array. The `sum()` function then loops over the `numbers` array and adds up the values.

The rest operator can also be used to collect the remaining elements of an array into a new array:

```jsx
const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // output: 1

console.log(rest); // output: [2, 3, 4, 5]
```

In this example, we've used the rest operator to collect the remaining elements of the array `[1, 2, 3, 4, 5]` into a new array called `rest`.

The rest operator can also be used to merge objects:

```jsx
const obj1 = { a: 1, b: 2 };

const obj2 = { c: 3, d: 4 };

const obj3 = { ...obj1, ...obj2 };

console.log(obj3); // output: { a: 1, b: 2, c: 3, d: 4 }
```

In this example, we've used the spread operator to merge two objects `obj1` and `obj2` into a new object `obj3`. The spread operator allows us to write more concise code and avoid using `Object.assign()`.

The rest operator and spread operator are two powerful features that can help you write more concise and efficient code in JavaScript. They are commonly used in modern JavaScript frameworks and libraries like React and Redux.