// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let startButton = document.getElementById("new-game");
    startButton.addEventListener("click", startGame)
});

// Get elements form the DOM and assign them to variables
let guessButton = document.getElementById("guess");
let userGuess = document.getElementById("answer-box");
let feedback = document.getElementById("feedback");
let yourTry = document.getElementById("tries");
let genNo = generateRandomNumber();


function startGame() {
    console.log("Start game");
    // generateRandomNumber();
    console.log("Loop 10 times");
    console.log("  Enter your guess");
    // checkValidNumber();
}

/**
 * Generate a random number from 1 to 100
 * @returns rNumber
 */
function generateRandomNumber() {
    let rNumber = Math.floor(Math.random() * 100) + 1;
    return rNumber;
}

/**
 * Check if a user guess is a valid number  
 * A valid number is from 1 to 100 
 */
function checkValidNumber() {
    console.log("  Check Valid Number 1 - 100");
    console.log(genNo); // debuging

    // Check if entered guess is valid (from 1 to 100)

    if (userGuess.value < 1 || userGuess.value > 100) {
        alert("Please enter a number between 1 and 100.");

    } else {
        console.log("Your guess " + userGuess.value + " is valid number");
    }
    console.log("    if yes - checkGuess");
    checkGuess();
}

/**
 * Check validated number against the random number
 */
function checkGuess() {

    if (userGuess.value < genNo) {
        feedback.textContent = " too low";
        yourTry.textContent += userGuess.value + " ";
    } else if (userGuess.value > genNo) {
        feedback.textContent = " too high";
        yourTry.textContent += userGuess.value + " ";
    } else if (userGuess.value == genNo) {
        alert(`Yuppie!! You won. The number was: ${userGuess.value}`);
    }
}

function incrementTries() {
    console.log("                  increment tries");
}

function generateFeedback() {
    console.log("                  Feedback message!");
}

// add event listener for guessButton and check if the user guess is a valid number
guessButton.addEventListener("click", function () {
    console.log("Random number when you press guessButton is: " + genNo);
    checkValidNumber();
})