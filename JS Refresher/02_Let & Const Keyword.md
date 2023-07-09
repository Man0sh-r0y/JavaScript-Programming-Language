# Let & Const Keyword

In JavaScript, the `let` and `const` keywords are used to declare variables. They were introduced in ECMAScript 6 (ES6) as alternatives to the `var` keyword. The `let` keyword declares a block-scoped variable, while the `const` keyword declares a read-only, block-scoped variable.

## **The let keyword**

The `let` keyword is used to declare a variable that is block-scoped. This means that the variable is only accessible within the block in which it is declared, including any nested blocks. A block is defined by a set of curly braces `{}`. Here's an example:

```jsx
function example() {

	let x = 1;

	if (true) {

		let x = 2;

		console.log(x); // 2
	}

	console.log(x); // 1

}
```

In this example, the variable `x` is declared twice using the `let` keyword. The first declaration creates a variable in the `example()` function's scope and initializes it with the value `1`. The second declaration creates a new variable in the `if` statement's scope and initializes it with the value `2`. When we log `x` inside the `if` block, we get `2`. When we log `x` outside the `if` block, we get `1`. This is because the two `x` variables are in different scopes.

## **The const keyword**

The `const` keyword is used to declare a read-only, block-scoped variable. This means that the variable cannot be reassigned a new value after it has been initialized. Here's an example:

```jsx
function example() {

	const x = 1;

	if (true) {

		const x = 2;

		console.log(x); // 2

	}

	console.log(x); // 1 
}
```

In this example, the variable `x` is declared twice using the `const` keyword. The first declaration creates a variable in the `example()` function's scope and initializes it with the value `1`. The second declaration creates a new variable in the `if` statement's scope and initializes it with the value `2`. When we log `x` inside the `if` block, we get `2`. When we log `x` outside the `if` block, we get `1`. This is because the two `x` variables are in different scopes, and the `const` keyword prevents the variable from being reassigned a new value.

```jsx
function example() {

	const x = { y: 1 };

	x.y = 2;

	console.log(x.y); // 2

}
```

In this example, we declare a `const` variable `x` and initialize it with an object that has a property `y` with a value of `1`. We then reassign the value of the `y` property to `2`. This works because the `const` keyword only prevents reassignment of the variable itself, not its properties.

## **When to use let and const**

It's generally recommended to use `const` by default and only use `let` when you know the value of a variable needs to change. This can help prevent bugs caused by accidentally reassigning a variable when you didn't intend to. If you need to change the value of a variable, you should ask yourself if it needs to be changed at all. If not, consider using a `const` variable instead. If it does need to be changed, use a `let` variable.

In conclusion, the `let` and `const` keywords are useful for creating block-scoped variables in JavaScript.