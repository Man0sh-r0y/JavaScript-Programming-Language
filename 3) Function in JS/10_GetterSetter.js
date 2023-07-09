//GETTER SETTER

//getter -> access properties
//setter -> change or mutate properties

let person = {
    firstName : 'Manash',
    lastName: 'Roy',
    // getter
    get getFullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    // setter
    set setFullName(value) {
        let words = value.split(' ');
        this.firstName = words[0];// first name
        this.lastName = words[1];// last name
    }
};


console.log(person.getFullName);// Manash Roy
person.setFullName= "Priya Das";
console.log(person.getFullName);
