/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()

console.log("Max Barrenechea")

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"

let favoriteFood = "Steak";
favoriteFood = "Pizza";

const favoriteDrinK= "Water";
// TODO 3: Create variable mystery, assign a string, then a number, print type each time

let mystery ="Hello";
console.log(typeof mystery); //string
mystery = 67;
console.log(typeof mystery); //number

// TODO 4: Declare const schoolName, try to reassign

const schoolName = "Christopher Columbus High School";

// TODO 5: Create three valid camelCase variables and print them

let quarterBack; // Declare
let pointGuard; // Declare

pointGuard = "Lebron James"; // Intialize
let classRoom = "L12"

// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
// - Repeat using template literals

let age = 16; // Declare and Initialize
console.log("I am " + age + " years old"); // Concatenation
console.log (`I am ${age} years old`); // Template Literals

/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   2. What challenges did you encounter, and how did you solve them?
   3. Where else could this programming concept be useful?
   =========================================================== */


   let width = Number (prompt("Give me the width"))
   let height = Number (prompt("Give me the height"))

   let area = width * height;
   console.log("The area is: " +area);

   let perimeter = 2 * (width + height);
   console.log("The perimeter is: " +perimeter);
