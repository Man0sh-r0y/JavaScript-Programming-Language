# Classes, Properties & Methods in JS

Classes, properties, and methods are fundamental concepts in object-oriented programming (OOP). In JavaScript, these concepts were introduced in ECMAScript 2015 (ES6) to make object-oriented programming easier and more intuitive. In this article, we'll discuss the basics of classes, properties, and methods in JavaScript, how to create and use them, and provide some examples to help you get started.

## **Creating a Class**

In JavaScript, you can create a class using the `class` keyword followed by the name of the class. Here's an example:

```jsx
class Person {

	constructor(name, age) {

		this.name = name;

		this.age = age;

	}

	sayHello() {

		console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);`

	}

}
```

In this example, we've created a `Person` class with a constructor that takes two arguments: `name` and `age`. Inside the constructor, we assign the values of `name` and `age` to instance variables `this.name` and `this.age`, respectively.

We've also defined a method called `sayHello()` that logs a message to the console. The `sayHello()` method uses the `this` keyword to access the `name` and `age` properties of the `Person` object.

## **Properties**

In JavaScript, properties are variables that are associated with an object. You can define properties for a class by assigning them to the `this` keyword inside the class constructor. Here's an example:

```jsx
class Rectangle {

	constructor(width, height) {

		this.width = width;

		this.height = height;

	}

	get area() {

		return this.width * this.height;

	}

	set width(newWidth) {

		if (newWidth > 0) {

			this._width = newWidth;

		}

		else {

			console.error('Width must be positive');

		}

	}

	get width() {

		return this._width;

	}

}
```

In this example, we've created a `Rectangle` class with two properties: `width` and `height`. We've defined the properties inside the constructor by assigning the values of `width` and `height` to instance variables `this.width` and `this.height`, respectively.

We've also defined a getter method called `area` that calculates and returns the area of the rectangle. The `area` method uses the `this` keyword to access the `width` and `height` properties of the `Rectangle` object.

We've also defined getter and setter methods for the `width` property. The `set width()` method sets the value of the `this._width` property if the new value is positive, otherwise, it logs an error message to the console. The `get width()` method returns the value of the `this._width` property.

## **Methods**

In JavaScript, methods are functions that are associated with an object. You can define methods for a class by adding them to the class definition using the `class` keyword. Here's an example:

```jsx
class BankAccount {

	constructor(balance) {

		this.balance = balance;
	
	}

	deposit(amount) {

		this.balance += amount;
	
	}

	withdraw(amount) {

		if (this.balance >= amount) {
	
			this.balance -= amount;

		}

		else {

			console.error('Insufficient funds');

		}

	}

	getBalance() {

		console.log(`Your current balance is ${this.balance}`);

	}

}
```

In this example, we've created a `BankAccount` class with three methods: `deposit()`, `withdraw()`, and `getBalance()`. The `deposit()` method adds the `amount` parameter to the `balance` property. The `withdraw()` method subtracts the `amount` parameter from the `balance` property if the `balance` is sufficient, otherwise, it logs an error message to the console. The `getBalance()` method logs the current balance to the console.