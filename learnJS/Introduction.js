// KELVIN WEATHER - convert any kelvin using kelvin variable to fahrenheit and newton
// constant variable
let kelvin = 293;

// celcius is 273 degrees less than kelvin
let celcius = kelvin - 273;

// convert celcius to fahrenheit
let fahrenheit = celcius*(9/5)+32;
//console.log(typeof fahrenheit);
//console.log(fahrenheit);

// round down decimal
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// celcius to Newton scale
let Newton = Math.floor(celcius*(33/100));
console.log(`The temperature is ${Newton} Newton.`);

console.log('-------------------------------')


// DOG YEARS - convert any age from human years to dog years, just change the myAge variable
//my age
let myAge = 29;

// first two years of a dog's life equates to 10.5 in human years
let earlyYears = 2;
earlyYears*=10.5;

// two years of my age accounted for
let laterYears = myAge - 2;


// dog years after the first two years
laterYears *= 4;

// my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// my name lowercased
let myName = 'Ethan'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
