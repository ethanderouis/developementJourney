// ROCK PAPER SCISSORS GAME
// user input
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  } else {
    console.log('Invalid Input');
  }
}

//firstGame = getUserChoice('SciSSorS');
//console.log(firstGame);

//computer choice
const getComputerChoice = () => {
  randomNum = Math.floor(Math.random()*3); // 0,1,2 outputs only
  console.log(randomNum);

  if (randomNum === 0) {
    //console.log('rock');
    return 'rock';
  } else if (randomNum === 1) {
    //console.log('paper');
    return 'paper';
  } else {
    //console.log('scissors');
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  userChoice = getUserChoice(userChoice);
  console.log(`User choice is ${userChoice}.`);
  console.log(`Computer choice is ${computerChoice}.`)

  if (userChoice === computerChoice) {
    console.log('It is a draw.')
  } else if (userChoice === 'rock') {
      if (computerChoice === 'scissors') {
        console.log('User wins');
      } else {
        console.log('User loses.')
      }
  } else if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        console.log('User wins');
      } else {
        console.log('User loses.')
      }
  } else if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        console.log('User wins');
      } else {
        console.log('User loses.')
      }
  } else {
    console.log('How the heck did we get to this option');
  }
}

// play game
const playGame = (userChoice, computerChoice) => {
  determineWinner(userChoice, computerChoice);
}

playGame('pAPer', getComputerChoice());