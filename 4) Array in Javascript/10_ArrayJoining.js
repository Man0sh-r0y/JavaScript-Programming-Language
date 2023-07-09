// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).
let first = [1, 2, 3, 4];

let joined = first.join();
console.log(joined);// 1,2,3,4

joined = first.join('_');
console.log(joined);// 1_2_3_4

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
console.log(text);// Banana and Orange and Apple and Mango