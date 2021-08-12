// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
    let startButton = document.getElementById("new-game");
    startButton.addEventListener("click", startGame);
});

// Get elements form the DOM and assign them to variables
const guessButton = document.getElementById("guess");
const userGuess = document.getElementById("answer-box");
const feedback = document.getElementById("feedback");
const yourTry = document.getElementById("tries");
const genNo = generateRandomNumber();
let countTries = 1;

// add event listener for guessButton and check if the user guess is a valid number
guessButton.addEventListener("click", function () {
    checkValidNumber();
});

/**
 * Restart the game by reloading the browser
 */
function startGame() {
    location.reload();
}

/**
 * Generate a random number from 1 to 100
 * @returns rNumber
 */
function generateRandomNumber() {
    let rNumber = Math.floor(Math.random() * 100) + 1;
    console.log("The random number to guess is: " + rNumber);
    return rNumber;
}

/**
 * Check if a user guess is a valid number  
 * A valid number is from 1 to 100 
 */
function checkValidNumber() {

    // Check if entered guess is valid (from 1 to 100)
    if (userGuess.value < 1 || userGuess.value > 100) {
        alert("Please enter a number between 1 and 100.");
    } else {
        console.log("Your guess " + userGuess.value + " is valid number"); // for debugging
        if (countTries <= 10) {
            checkGuess();
        } else {
            alert("Awww... You lost! The number was " + genNo);
            userGuess.value = "";
        }
    }
}

/**
 * Check validated number against the random number
 */
function checkGuess() {

    if (userGuess.value < genNo) {
        feedback.textContent = " too low";
        yourTry.textContent += userGuess.value + " ";
        countTries++;
    } else if (userGuess.value > genNo) {
        feedback.textContent = " too high";
        yourTry.textContent += userGuess.value + " ";
        countTries++;
    } else if (userGuess.value == genNo) {
        alert(`Yuppie!! You won. The number was: ${userGuess.value}`);
    }
}