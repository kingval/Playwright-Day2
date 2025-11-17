//Types of Data types in JavaScript

//1. Primitive Data Types
//String
let city = "New York";
console.log(typeof city); // Output: string

//Number
let population = 8419600;
console.log(typeof population); // Output: number  
//Boolean
let isCapital = false;
console.log(typeof isCapital); // Output: boolean
//Undefined
let mayor;
console.log(typeof mayor); // Output: undefined
//Null
let state = null;
console.log(typeof state); // Output: object (this is a known quirk in JavaScript)
//Symbol
let uniqueId = Symbol("id");
console.log(typeof uniqueId); // Output: symbol
//BigInt
let bigNumber = BigInt(9007199254740991);
console.log(typeof bigNumber); // Output: bigint


//2. Non-Primitive Data Types
//Object
let person = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 28
};
console.log(typeof person); // Output: object
//Array
let colors = ["red", "green", "blue"];  
console.log(typeof colors); // Output: object
//Function
function greet() {
    return "Hello!";
}
console.log(typeof greet); // Output: function
//Date
let today = new Date();
console.log(typeof today); // Output: object
//RegExp
let pattern = /ab+c/;
console.log(typeof pattern); // Output: object  
//Map
let map = new Map();
console.log(typeof map); // Output: object
//Set
let set = new Set();
console.log(typeof set); // Output: object  
//WeakMap
let weakMap = new WeakMap();
console.log(typeof weakMap); // Output: object
//WeakSet
let weakSet = new WeakSet();
console.log(typeof weakSet); // Output: object  
//Note: In JavaScript, arrays, dates, regex, maps, sets, weakmaps, and weaksets are all considered objects.
console.log(colors[0]); // Output: red
console.log(person.firstName); // Output: Alice 
console.log(greet()); // Output: Hello!
console.log(today.toDateString()); // Output: (current date in string format)
console.log(pattern.test("abcc")); // Output: true