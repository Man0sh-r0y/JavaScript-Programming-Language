let targetObject = {
    No_ : 1,
    Name_ : "Manash"
};

let sourceObject = {
    No : 2,
    Name : "Priya"
};

// The Object.assign() method copies all  properties from one or more source objects to a target object. It returns the modified target object.

// Syntax: Object.assign(target, ...sources)
// multiple source object can have

let obj = Object.assign(targetObject, sourceObject);
console.log(obj);// { No_: 1, Name_: 'Manash', No: 2, Name: 'Priya' }
console.log(targetObject);// { No_: 1, Name_: 'Manash', No: 2, Name: 'Priya' }