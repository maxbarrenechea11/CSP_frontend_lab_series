/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
let age = 15;
if (age <= 16) {
    console.log("Teen Discount");
} else if (age >= 65) {
    console.log("Senior Discount");
} else {
    console.log("No Discount");
}

let weight = 180;
if (weight <= 150) {
    console.log("You are Slim");
} else if (weight <= 190) {
    console.log("You are in shape");
} else{
    console.log("You need to start working out");
}
// TODO 2: Nested if with two numbers

let number1 = 10;
let number2 = 20;

if (typeof number1 == 'Number' && typeof number2 == 'Number') {

if (number1 === number2) {
    console.log ("Both numbers are equal")
} else if (number1 > number2) {
    console.log("Number 1 is greater than Number 2");
} else { 
    console.log("Number 1 is smaller")
}

}
// TODO 3: Switch statement for language greeting

let language = "French"
switch (language) {
    case "Spanish":
        console.log("Hola, mundo");
        break;
    case "French":
        console.log("Bonjour, le monde");
        break;
    default:
        console.log("Hello, world");
        break;
}

let stock = "APPL"
switch(stock) {
    case "APPL":
    case "TSLA":
    case "NVDA":
        console.log("The Industry is Technology");
        break;
    case "XOM":
        console.log("Exxon Mobil Corporation");
        break;
    case "CVX":
        console.log("Chevron Corporation");
        break;
    case "SHEL":
        console.log("Shell plc");
        break;
    case "BLK":
        console.log("BlackRock, Inc.");
        break;
    case "VTI":
        console.log("Vanguard Total Stock Market ETF");
        break;
    case "JPM":
        console.log("JPMorgan Chase & Co.");
        break;
    

    
}


     

// TODO 4: While loop (1 to 10)

// TODO 5: Do..while loop (1 to 5)

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)

// TODO 7: Even/Odd loop (1 to 20)

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
