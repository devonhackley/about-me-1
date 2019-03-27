'use strict';

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
  (responseYes && i % 2 === 0) || (!responseYes && i % 2 !== 0) ? alert(`That's correct, Ed does ${negation} ${questions[i]}`) : alert(`That's incorrect, Ed does ${negation} ${questions[i]}`);
}

// generate a random number and ask user to guess it
let randomNumber = Math.floor(Math.random() * Math.floor(13)) + 1;
console.log(randomNumber);
let numberResponse;
let j = 1;
while (j < 5 && randomNumber !== numberResponse) {
  numberResponse = parseInt(prompt(`Guess a random nuber between 1 and 13. You have 4 tries. Attempt ${j}`));
  if (randomNumber === numberResponse) alert(`Nice! The random number was ${randomNumber}`);
  j++;
}
if (randomNumber !== numberResponse) alert(`The random number was ${randomNumber} better luck next time.`);
