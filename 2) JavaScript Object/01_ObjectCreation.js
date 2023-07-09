let a = 2; // this is just a variavle
a = {}; // now this is an emoty Object
// {} => this is an object literal

// create Object
let rectangle = {
    length: 1,
    breadth: 2,
    // function inside a object
    draw: function () {
        console.log("Drawing Rectangle")
    }
    // Collections of key-value pair
    // keys=> length, breadth
    // value=>1,2
};
// I created a object whose length , breadth is 1 and 2.
// And it has also a draw function
console.log(rectangle); // { length: 1, breadth: 2, draw: [Function: draw] }
console.log(rectangle.length); // 1
console.log(rectangle.breadth); // 2
console.log(rectangle.draw); // [Function: draw]

// Another Object
let circle = {
    radius: 10,
    // another way to create function inside object
    draw() {
        console.log("Drawing Circle");
    }
};

console.log(circle); // { radius: 10, draw: [Function: draw] }
console.log(circle.radius); // 10
console.log(circle.draw); // [Function: draw]