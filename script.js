"use strict";
// console.log(document.querySelector(".message").textContent);
// console.log(document.querySelector(".message").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector(".message");

let number = document.querySelector(".number");
let highscore = 0;
let score = 20;
// let g = Number(document.querySelector(".guess").value);
console.log(secretNumber);
document.querySelector(".guess").textContent = "";

document.querySelector(".check").addEventListener("click", function () {
  if (score > 1) {
    console.log(Number(document.querySelector(".guess").value));
    switch (true) {
      case Number(document.querySelector(".guess").value) > secretNumber:
        message.textContent = "↗ Too high";
        score--;
        document.querySelector(".score").textContent = score;
        break;

      case Number(document.querySelector(".guess").value) < secretNumber:
        message.textContent = "↘ Too low";
        score--;
        break;

      case Number(document.querySelector(".guess").value) === secretNumber:
        message.textContent = "✅ You Win the game";
        if (score > highscore) {
          document.querySelector(".highscore").textContent = score;
        }
        break;

      case "":
        console.log("makinsh");
        message.textContent = "Enter a Number !!";
    }
  } else {
    message.textContent = "❌ You lose the game";
  }
});
