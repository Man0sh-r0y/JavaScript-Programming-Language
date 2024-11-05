
// Understanjd the Call() function
let name = {
    firstName: "Manash",
    lastName: 'Roy',

    printFullName: function() {
        console.log(this.firstName + " " + this.lastName); // this keyword will point to the name object
    },

    printHomwTown: function(hometwon, state) {
        console.log(this.firstName + " is from " + hometwon + ", " + state);
    }
}

name.printFullName(); // Manash Roy

let name2 = {
    firstName: "Sourav",
    lastName: "Kumar"
}

// using Call() method we can do function borrowing
// We can borrow function from other object and use it with the data of some other object

name.printFullName.call(name2); // Sourav Kumar
// as an argument of the call(), I have to send the reference of the object for which I need to borrow the function

// If I have to pass argument from the call()
name.printHomwTown.call(name2, "Kolkata", "WestBengal"); // Sourav is from Kolkata, WB

// Understanjd the Apply() function

// The only difference between Call() and Apply() is that Apply() takes an array as an argument
name.printHomwTown.apply(name2, ["Kolkata", "WestBengal"]);

// understanding the bind() function

// the only difference between bind() and call() is :
// bind() doesn't directly call the function
// it copy the function from where I want to borrow
// And it binds the copied function with the object I want to use
// then it returns the copied function
let name3 = name.printHomwTown.bind(name2, "Kolkata", "WestBengal");
name3(); // Sourav is from Kolkata, WestBengal

// here name3 is a function which is binded with name2 object
// printHomwTown function is copied from name object and binded with name2 object
// so this is just used to bind, keep a copy of that method and use it later