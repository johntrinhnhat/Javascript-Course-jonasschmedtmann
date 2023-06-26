"use strict";

//Create variable contain score, highest score and secret Number

let score = 20;
let highscore = 0;
let secretNum = Math.round(Math.random() * 20 + 1);

// Create a function called "displayMessage" to display multiple times

const displayMessage = function (message) {
  document.querySelector(".message").innerHTML = message;
};

// "Check btn" when clicked.

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  //when there is no input number

  if (!guess) {
    displayMessage("🙅‍♂️ No Input Number");

    //where guess number is higher than secret number
  } else if (guess > secretNum) {
    if (score > 1) {
      displayMessage("Your guess is too high 📈");
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      displayMessage("You LOST the game 💣");
      document.querySelector(".score").innerHTML = 0;
    }

    //where guess number is lower than secret number
  } else if (guess < secretNum) {
    if (score > 1) {
      displayMessage("Your guess is too low 📉");
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      displayMessage("You LOST the game 💣");
      document.querySelector(".score").innerHTML = 0;
    }

    //when guess number === secret number 🔑
  } else {
    displayMessage("You are a gem 💎");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("h1").style.color = "#fff";
    document.querySelector(".copyright").style.color = "#fff";
    document.querySelector(".number").innerHTML = secretNum;
    document.querySelector(".number").style.width = "30rem";

    //Implement Highest Scored
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").innerHTML = highscore;
    }
  }
});

// Reset Button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNum = Math.round(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("h1").style.color = "#60b347";
  document.querySelector(".copyright").style.color = "#60b347";
  displayMessage("Start guessing ...");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").innerHTML = score;
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".number").style.width = "15rem";
});
