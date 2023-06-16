'use strict';
// REFACTORING: to restructure the code without breaking the functionality and to eliminate duplicate code
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // created to get updated below
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displaySecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const changeNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when user gives NO input
  if (!guess) {
    // implemenatation of game logic
    displayMessage('⛔️ No number!');

    // when user WINS the game
  } else if (guess === secretNumber) {
    // manipulating CSS by using the "style" property => CSS properties in camelCase and assigned values in 'string#
    displayMessage('🎉 Correct Number!');
    displaySecretNumber(secretNumber);
    changeBackgroundColor('#60b347');
    changeNumberWidth('30rem');
    if (score > highscore) {
      // highscore adapts the value of score
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // the ternary operator unifies both the "score > 1" and "score < 1" code blocks into an efficient one
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too low!');
      score--; // more efficient code
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

// 1.)
document.querySelector('.again').addEventListener('click', function () {
  // 2.)
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  // 3.)
  displayMessage('Start guessing...');
  displaySecretNumber('?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ''; // emptry strings means the ABSENCE of ANY VALUE!
  changeBackgroundColor('#222');
  changeNumberWidth('15rem');
});
