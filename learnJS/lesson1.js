// CREATE VARIABLES
let fname = "Ethan";
console.log("Print fname below")
console.log(`My name is ${fname}.`)

let stark1, stark2, stark3;
stark1 = "Bran";
stark2 = "Arya";
stark3 = "Sansa";

// DATA TYPES
// string
let lannisterDwarf = "Tyrion";

// number
let yearOfService = 9;

// boolean
let handOfTheKing = true;

// object
const lannister = {lord:"Tywin", sigil:"lion"};

// array object
const tywinKids = ["Jaime", "Cersei", "Tyrion"];

// date object
const todaysDate = new Date("2026-07-17");

// OPERATORS
let tubberAge = 14;
let lillieAge = 20;
let combinedAge = tubberAge + lillieAge;

/*

+   Addition
-   Subtraction
*   Multiplication
**  Exponentiation
/   Division
%   Modulus (Division Remainder)
++  Increment
--  Decrement

*/
let lord = "Eddard Stark";
let land = "Winterfell";

let houseStark = lord + " of " + land;

/*
comparison operators

==  equal to
=== equal value and equal type
!=  not equal
!== not equal value or not equal type
>   greater than   
<   less than
>=  greater than or equal to
<=  less than or equal to

*/

let tobiOlderLillie = tubberAge > lillieAge; // false

/*
logical operators

&&  logical and
||  logical or
!   logical not

*/

/*
conditional statements

if (condition1) {
    code to execute if the condition is true
} else if (condition2) {
    code to execute if the condition1 is false
} else {
    code to execute if condition1 and condition2 is false
}
*/

let age = 25;
if (age >= 25) {
    text = "You can rent a car!";
} else {
    text = "You cannot rent a car!";
}

/*
ternary condition
shorthand
let data = condition ? expression1 : expression 2;
let text = (age >= 25) ? "You can rent a car!" : "You cannot rent a car!";
*/

let day;
let todayDate = new Date().getDay();
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);
