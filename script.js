"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let body = document.querySelector("body");
let guess = document.querySelector(".guess");
let highScoreElement = document.querySelector(".highscore");
let scoreElement = document.querySelector(".score");
let highscore = 0;
let score = 20;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  if (!guess.value) {
    message.textContent = "🚫Enter a Number !!";
  } else {
    if (score > 1) {
      switch (true) {
        case Number(guess.value) !== secretNumber:
          score--;
          scoreElement.textContent = score;
          message.textContent =
            guess.value > secretNumber ? "↗ Too high" : "↘ Too low";
          break;

        case Number(guess.value) === secretNumber:
          message.textContent = "✅ You Win the game";
          body.style.backgroundColor = "#60b347";
          number.textContent = secretNumber;
          number.style.width = "30rem";
          if (score > highscore) {
            highscore = score;
            highScoreElement.textContent = highscore;
          }
          break;
      }
    } else {
      message.textContent = "❌ You lose the game";
      body.style.backgroundColor = "orangered";
      scoreElement.textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  guess.value = "";
  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
  highScoreElement.textContent = highscore;
  score = 20;
  scoreElement.textContent = score;
  number.textContent = "?";
  message.textContent = "Start guessing...";
});
