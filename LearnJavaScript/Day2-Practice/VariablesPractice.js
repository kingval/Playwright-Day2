//Variable Practice session with different types of variable declarations in JavaScript

//using the var functionality in JS testing the features of redeclaration and reassignment
var name = "Chetan";
console.log(name)
var name = "Valand";
console.log(name);

name = "Chetan Valand";
console.log(name);

//using the let functionality in JS testing the features of reassignment
let age = 36;
console.log(age);

age = 37; // reassignment of the age test
console.log(age);

//using the const functionality in JS testing the features of immutability
const city = "Ahmedabad";
console.log(city);

//using let and const to store user profile information
const userEmail = "king.valand@gmail.com"; // using const as email should remain constant
const userID = "kingvaland36"; // using const as userID should remain constant
let password = "securePass@2025"; // using let as password might change
password = "newPass@2025"; // updating the password


console.log("User Email:", userEmail);
console.log("User ID:", userID);
console.log("Password:", password);

