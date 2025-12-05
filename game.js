let secretNumber = null;
let maxRange = null;

function startGame(range) {
  maxRange = range;
  secretNumber = Math.floor(Math.random() * range) + 1;

  document.getElementById("difficulty-select").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  document.getElementById("commentary").textContent = "Game started.";
}

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");

  if (!guess) {
    feedback.textContent = "Enter a number.";
    return;
  }

  if (guess > secretNumber) {
    feedback.textContent = "Too high.";
    document.getElementById("commentary").textContent = "Lower.";
  } else if (guess < secretNumber) {
    feedback.textContent = "Too low.";
    document.getElementById("commentary").textContent = "Higher.";
  } else {
    feedback.textContent = "You got it!";
    document.getElementById("commentary").textContent = "Well done.";
  }
}

function restartGame() {
  location.reload();
}

function quitGame() {
  window.close();
}
