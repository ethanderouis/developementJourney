// MAGIC EIGHT BALL PROJECT

let userName = 'Tubber';

// ternary expression to check if userName is empty - true or false
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello');

let userQuestion = 'Can I get some goop?';

console.log(`${userName} asked, "${userQuestion}"`);

// creating a random number between 0 to 7
let randomNumber = Math.floor(Math.random()*8);

let eightBall;

// create either an if/else statement or switch case statements

switch (randomNumber) {
    case 1:
        eightBall = 'It is certain';
        break;
    case 2:
        eightBall = 'It is decidedly so';
        break;
    case 3:
        eightBall = 'Hazy ask again';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'Cannot predict now';
        break;
}


// this is the if else version
/*
if (randomNumber === 1) {
    eightBall = 'It is certain';
} else if (randomNumber === 2) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 3) {
    eightBall = 'Hazy ask again';
} else if (randomNumber === 4) {
    eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
} else {
    eightBall = 'Cannot predict now';
}
*/

console.log(eightBall);



// RACE DAY PROJECT

let raceNumber = Math.floor(Math.random() * 1000);


let isEarly = true;
let runnerAge = 18;

switch (true) {
  case isEarly && runnerAge > 18:
    raceNumber += 1000;
};

if (runnerAge > 18 && isEarly) {
  console.log(`Runner ${raceNumber}, you are over the age of 18 and registered early, you will be running at 9:30am.`)
} else if (runnerAge > 18 && isEarly == false) {
  console.log(`Runner ${raceNumber}, you are over the age of 18 and not registered early, you will be running at 11:00am.`)
} else if (runnerAge < 18) {
  console.log(`Runner ${raceNumber}, you are a baby that is running at 12:30pm.`)
} else if (runnerAge == 18) {
  console.log(`Runner ${raceNumber}, run free you 18 year old vagabond.`)
} else {
  console.log(`Runner ${raceNumber}, we did not plan for you, so you will run at 12:30pm. Sorry for the incovenience.`)
}