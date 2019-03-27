'use strict';

var responseYes = false;
const answers = ['yes', 'no', 'y', 'n'];
const questions = ['speak fluent Danish', 'like brussel sprouts', 'have a 1929 Harley Davidson', 'like to work all the live-long day',
  'like to hunt for meteorites'
];
const userName = prompt('What is your name?');
userName ? alert(`Hi ${userName}, let's play a guessing game about Ed`) : alert('Hi anonymous, let\'s play a guessing game about Ed');

for (let i = 0; i < questions.length; i++) {
  do {
    var response = prompt(`Does Ed ${questions[i]}?`).toLowerCase();
    console.log(`Does Ed ${questions[i]}?`);
    response === 'yes' || response === 'y' ? responseYes = true : responseYes = false;
  } while (!answers.includes(response));

  var negation = '';
  if ((responseYes && i % 2 !== 0) || (!responseYes && i % 2 !== 0)) negation = 'not';

  (responseYes && i % 2 === 0) || (!responseYes && i % 2 !== 0) ? alert(`That's correct, Ed does ${negation} ${questions[i]}`) : alert(`That's incorrect, Ed does ${negation} ${questions[i]}`);
}
