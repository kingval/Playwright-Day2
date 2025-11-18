//Data Types Practice session with different types of Data in JavaScript

//using the Primitive data types in JS, testing the typeof operator

//testing the String data type
let city = "Ahmedabad";
console.log(typeof city); // typeof operator is used to determine the type of a variable.
// for example
// Output: string
console.log(city);
//printing the value of city variable
// Output: Ahmedabad

//testing the Number data type
let population = 55000000;
console.log(typeof population);
// Output: number
console.log(population); 
//printing the value of population variable
// Output: 55000000

//testing the Boolean data type
let isCapital = true;
console.log(typeof isCapital);
// Output: boolean
console.log(isCapital);
//printing the value of isCapital variable
// Output: true

//testing the Undefined data type
let mayor;
console.log(typeof mayor);
// Output: undefined
console.log(mayor);
//printing the value of mayor variable
// Output: undefined

// let mayorName = "Chetan Valand";
// console.log(typeof mayor);
// console.log(mayorName);
//printing the value of mayorName variable
// Output: string

//testing the Null data type
let state = null;
console.log(typeof state);
// Output: object (this is a known quirk in JavaScript)
console.log(state);
//printing the value of state variable
// Output: null

//testing the Symbol data type
let uniqueId = Symbol("id");
console.log(typeof uniqueId);  

// Output: symbol
console.log(uniqueId);
//printing the value of uniqueId variable
// Output: Symbol(id)   

//testing the BigInt data type
let bigNumber = BigInt(12345678901234567890);
console.log(typeof bigNumber);      
// Output: bigint
console.log(bigNumber);
//printing the value of bigNumber variable
// Output: 12345678901234567890n

//using the Non-Primitive data types in JS, testing the typeof operator

//testing the Object data type      
let person = {
    firstName: "Chetan",
    lastName: "Valand",
    age: 36
};
console.log(typeof person);
// Output: object
console.log(person);
//printing the value of person variable
// Output: { firstName: "Chetan", lastName: "Valand", age: 36 }

//testing the Array data type
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(typeof days);
// Output: object
console.log(days);
//printing the value of days variable
// Output: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
console.log(Array.isArray(days));
//checking if days variable is an array
// Output: true
console.log(days.length);
//printing the length of days array
// Output: 7

console.log(days[4]);
//printing the 5th element of days array
// Output: Friday

//testing the Function data type
function greet() {
    return "Namaskar! Welcome to JavaScript Data Types Practice.";
}
console.log(typeof greet);
// Output: function
console.log(greet());
//printing the value returned by greet function
// Output: Namaskar! Welcome to JavaScript Data Types Practice.

let today = new Date();
console.log(typeof today); // Output: object
console.log(today); // Output: current date and time
//printing the value of today variable
// Output: current date and time

//testing the RegExp data type
let pattern = /hello/i;
console.log(typeof pattern);
// Output: object
console.log(pattern);
//printing the value of pattern variable
// Output: /hello/i 
