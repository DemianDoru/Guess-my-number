'use strict';
// // asa selectam un element si ii schimbam textul
// document.querySelector('.message').textContent = '🏆 Correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// // asa selectam clasa si manipulam valoarea
// document.querySelector('.guess').value = 15;

let secretNumber = Math.trunc(Math.random() * 20) + 1; // in this way we can use a random number from 1 to 20
let score = 20; // set the inital score
let highscore = 0; // set the initial highscore
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When ther is no input
  if (!guess) {
    document.querySelector('.message').textContent =
      '⛔ No Number ! Write something...';
    score--;
    document.querySelector('.score').textContent = score;

    // When player win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      '🏆Correct Number! Congrats You Win!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem'; // when win the dimension of square change in a rectangle
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high, try less';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }

    // When the number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low, try higher';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the Game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; // empty string is empty space
  document.querySelector('body').style.backgroundColor = '#222'; // with .style can modify css elements
  document.querySelector('.number').style.width = '15rem';
});
