// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptCount = 0;
var audiotune = new Audio("audio.mp3.wav")
var loseaudio = new Audio("mixkit-losing-bleeps-2026.wav")

function checkGuess() {
    let guess = parseInt(document.getElementById("guessField").value);
    let message = document.getElementById("message");
    let attemptSpan = document.getElementById("attemptCount");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else {
        attemptCount++;
        attemptSpan.textContent = attemptCount;

        if (guess === randomNumber) {
            message.textContent = `Congratulations! You guessed the correct number (${randomNumber}) in ${attemptCount} attempts.`;
            message.style.color = "green";
            audiotune.play()
            disableInputAndButton();
        } else if (guess < randomNumber) {
            message.textContent = "Your guess is too low. Try again.";
            message.style.color = "red";
            loseaudio.play()
        } else {
            message.textContent = "Your guess is too high. Try again.";
            message.style.color = "red";
            loseaudio.play()
        }
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;

    document.getElementById("guessField").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attemptCount").textContent = "0";

    enableInputAndButton();
}

function disableInputAndButton() {
    document.getElementById("guessField").disabled = true;
    document.querySelector("button").disabled = true;
}

function enableInputAndButton() {
    document.getElementById("guessField").disabled = false;
    document.querySelector("button").disabled = false;
}
