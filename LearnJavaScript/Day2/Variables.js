//Types of variables in javascript

//1. var
var name = "John";
console.log(name); // Output: John
var name = "Doe";
console.log(name); // Output: Doe   
// 'var' allows redeclaration and reassignment
name = "Smith";
console.log(name); // Output: Smith

//2. let    
let age = 25;
console.log(age); // Output: 25
// let age = 30; // Error: Identifier 'age' has already been declared
age = 30; // Reassignment is allowed
console.log(age); // Output: 30

//3. const
const country = "USA";
console.log(country); // Output: USA
// const country = "Canada"; // Error: Identifier 'country' has already been declared
// country = "Canada"; // Error: Assignment to constant variable
// 'const' does not allow redeclaration or reassignment
console.log(country); // Output: USA

// I want to store login information
let username = "user123"; // using let as username might change
const password = "pass@123"; // using const as password should remain constant

console.log("Username:", username);
console.log("Password:", password);     
// Changing username
username = "newUser456";
console.log("Updated Username:", username); 
// Password remains the same    
console.log("Password remains the same:", password);

// Note: It's a good practice to use 'let' and 'const' instead of 'var' to avoid scope-related issues and enhance code readability.
