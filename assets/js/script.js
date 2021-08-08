

// Wait for the DOM to finish loading before running the game
// Get the button element and add event listeners to it

document.addEventListener("DOMContentLoaded", function() {
    let guess = document.getElementById("answer-box");
    guess.addEventListener("click", mainGame);
})

function mainGame() {
    generateRandomNumber();
    for (let i = 0; i < 10; i++) {
        
    }
}

function generateRandomNumber() {
    // Create a random number from 1 to 100
    let rNumber = Math.floor(Math.random() * 100) + 1;
    console.log(rNumber);
}

function checkGuess() {

}

function generateFeedback() {

}

function incrementGuess() {

}