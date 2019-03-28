'use strict';

var correctGuesses = 0;
var responseYes = false;
const answers = ['yes', 'no', 'y', 'n'];
const questions = ['speak fluent Danish', 'like brussel sprouts', 'have a 1929 Harley Davidson', 'like to work all the live-long day',
  'like to hunt for meteorites'
];
// get users name or if blank use ananoymous
const userName = prompt('What is your name?');
userName ? alert(`Hi ${userName}, let's play a guessing game about Ed`) : alert('Hi anonymous, let\'s play a guessing game about Ed');

// prompt user until a yes/no response is entered
for (let i = 0; i < questions.length; i++) {
  do {
    var response = prompt(`Does Ed ${questions[i]}? y/n`).toLowerCase();
    console.log(`Does Ed ${questions[i]}?`);
    response === 'yes' || response === 'y' ? responseYes = true : responseYes = false;
  } while (!answers.includes(response));

  // build a response message
  let negation = '';
  if ((responseYes && i % 2 !== 0) || (!responseYes && i % 2 !== 0)) negation = 'not';

  if (responseYes && i % 2 === 0 || !responseYes && i % 2 !== 0) {
    alert(`That's correct, Ed does ${negation} ${questions[i]}`);
    correctGuesses++;
  } else {
    alert(`That's incorrect, Ed does ${negation} ${questions[i]}`);
  }
}

// generate a random number between 1 and 13 and ask user to guess it
const randomNumber = Math.floor(Math.random() * Math.floor(13)) + 1;
console.log(randomNumber);
let j = 1;
let numberResponse = parseInt(prompt('Guess a random number between 1 and 13 in 4 tries or less'));
while (numberResponse !== randomNumber && j < 4) {
  numberResponse < randomNumber ?
    numberResponse = parseInt(prompt(`You guessed too low on attempt ${j}. Try again.`))
    :
    numberResponse = parseInt(prompt(`You guessed too high on attempt ${j}. Try again.`));
  j++;
}

if(numberResponse === randomNumber) {
  alert(`Nice! You guessed the random number ${randomNumber} on try number ${j}.`);
  correctGuesses++;
} else {
  alert(`Oh no, you exceeded 4 tries. The number was ${randomNumber}`);
}

// ask user to guess a favorite beer
const beerArray = [' Arrogant Bastard', ' Lucille', ' Bodhizafa', ' Space Dust', ' Hop Venom', ' Lush', ' Brother', ' Sister', ' Ruination', ' Dead Guy'];
var responseBeer = prompt('Guess one of my top ten favorite beers. You have 6 tries.');
let k = 0;
var guessedRight = false;
var lastChance = false;

while (!guessedRight && k < 5) {
  console.log(responseBeer);
  for (let value of beerArray) {
    if (value.slice(1).toLowerCase() === responseBeer.toLowerCase()) {
      alert(`Thats correct - ${responseBeer} is one of my top 10 beers. Here is a complete list ${beerArray}`);
      correctGuesses++;
      guessedRight = true;
      lastChance = true;
    }
  }
  if (!guessedRight) responseBeer = prompt(`No ${responseBeer} is not one of them. Try again`);
  k++;
}

for (let value of beerArray) {
  if (value.slice(1).toLowerCase() === responseBeer.toLowerCase() && !guessedRight) {
    alert(`Thats correct - ${responseBeer} is one of my top 10 beers. Here is a complete list ${beerArray}`);
    correctGuesses++;
    lastChance = true;
  }
}

if (!lastChance) alert(`Sorry, none of your guesses were correct. Here is a complete list ${beerArray}`);

correctGuesses < 5 ?
  alert(`You got ${correctGuesses} out of 7 correct. Better luck next time ${userName}`)
  :
  alert(`Well done! You got ${correctGuesses} out of 7 correct, ${userName}`);
