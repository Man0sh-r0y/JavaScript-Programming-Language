# Classes in JS

Classes are a fundamental concept in object-oriented programming (OOP). In JavaScript, classes were introduced in ECMAScript 2015 (ES6) to make object-oriented programming easier and more intuitive. In this article, we'll discuss the basics of classes in JavaScript, how to create and use them, and provide some examples to help you get started.

## **Creating a Class**

In JavaScript, you can create a class using the `class` keyword followed by the name of the class. Here's an example:

```jsx
class Person {

	constructor(name, age) {

		this.name = name;

		this.age = age;

	}

	sayHello() {

		console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);

	}

}
```

In this example, we've created a `Person` class with a constructor that takes two arguments: `name` and `age`. Inside the constructor, we assign the values of `name` and `age` to instance variables `this.name` and `this.age`, respectively.

We've also defined a method called `sayHello()` that logs a message to the console. The `sayHello()` method uses the `this` keyword to access the `name` and `age` properties of the `Person` object.

## **Creating an Object**

To create an instance of a class, you use the `new` keyword followed by the name of the class, and any arguments required by the constructor. Here's an example:

```jsx
const john = new Person('John', 30);

john.sayHello(); // "Hello, my name is John and I'm 30 years old.
```

In this example, we've created a `Person` object named `john` with a name of "John" and an age of 30. We then call the `sayHello()` method on the `john` object.