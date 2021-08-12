// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let startButton = document.getElementById("new-game");
    startButton.addEventListener("click", startGame)
});

// Get elements form the DOM and assign them to variables
let guessButton = document.getElementById("guess");
let userGuess = document.getElementById("answer-box").value;
let feedback = document.getElementById("feedback");
let yourTry = document.getElementById("tries");

function startGame() {
    console.log("Start game");
    // generateRandomNumber();
    console.log("Loop 10 times");
    console.log("  Enter your guess");
    // checkValidNumber();
}

// /**
//  * Generate a random number from 1 to 100
//  * @returns rNumber
//  */
// function generateRandomNumber() {
//     let rNumber = Math.floor(Math.random() * 100) + 1;
//     return rNumber;
// }

function checkValidNumber() {
    console.log(rNumber);
    console.log("  Check Valid Number 1 - 100");
    console.log("    if yes - checkGuess");
    checkGuess();
    console.log("    if no - alert: Number is not 1 - 100!!");
}

function checkGuess() {
    console.log("      guess = rNumber?");
    console.log("        if yes - alert: you won! - exit loop");
    console.log("          if no - guess < rNumber?");
    console.log("            if yes - feedback alert: to low! - incrementTries");
    generateFeedback();
    incrementTries();
    console.log("              if no - guess > rNumber?");
    console.log("                if yes - feedback alert: to high! - incrementTries");
    generateFeedback();
    incrementTries();
    console.log("                if no - alert: error message! - exit loop");
}

function incrementTries() {
    console.log("                  increment tries");
}

function generateFeedback() {
    console.log("                  Feedback message!");
}

// add event listener for GuessButton and check if the user guess is a valid number
guessButton.addEventListener("click", checkValidNumber);
let rNumber = Math.floor(Math.random() * 100) + 1;