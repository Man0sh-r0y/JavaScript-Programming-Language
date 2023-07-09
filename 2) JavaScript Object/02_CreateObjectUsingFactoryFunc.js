// Creating Object Using Factory Function

// While using constructor function I have to use Camel Case
//Camel Case -> numberOfStudents
function createRectangle(a, b) {
    // passing arguments through function
    let rectangle = {
        length: a,
        breadth: b,
        // function inside a object
        draw () {
            console.log("Drawing Rectangle");
        }
    };
    // return the object
    return rectangle;
}

let rec1 = createRectangle(5, 4);// creating rectangle 1 (object)
let rec2 = createRectangle(6, 10);// creating rectangle 2 (object)
let rec3 = createRectangle(3, 2);// creating rectangle 3 (object)

console.log(rec1);// { length: 5, breadth: 4, draw: [Function: draw] }
console.log(rec2); // { length: 6, breadth: 10, draw: [Function: draw] }
console.log(rec3); // { length: 3, breadth: 2, draw: [Function: draw] }

// Now by using dot I create access individual property

console.log(typeof (createRectangle));// function
console.log(typeof (rec1)); // object
console.log(rec1.constructor); // [Function: Object]
console.log(createRectangle.constructor);// [Function: Function]