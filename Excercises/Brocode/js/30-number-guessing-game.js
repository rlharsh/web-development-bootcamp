const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {
    let guess = parseFloat(document.getElementById("guessField").value);
    if (!Number.isInteger(guess)) {
        alert("Please enter a number.");
        return;
    }
    guesses++;

    if (guess == answer) {
        alert(`${answer} is the #. It took you ${guesses} guesses.`);
    } else if (guess < answer) {
        alert("Too low. Try again.");
    } else {
        alert("Too high. Try again.");
    }
};