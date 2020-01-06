var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ],
  randomLetter = "",
  winCount = 0,
  lossCount = 0,
  guessesLeft = 0,
  guessedLetters = [],
  defaultGuessesLeft = 9;

window.addEventListener("keypress", onKeyPress, false);
newGame();

function newGame() {
  guessedLetters = [];
  resetGuesses();
  generateRandomLetter();
  console.log(randomLetter); // Turn on to see randomLetter in console
  displayOnScreen("wins", "Wins: " + winCount);
  displayOnScreen("losses", "Losses: " + lossCount);
  displayOnScreen("guessesleft", "Guesses Left:" + guessesLeft);
}

function onKeyPress(key) {
  letter = key.key.toLowerCase();
  if (
    //   checking letters to make sure its in the array and that it hasnt already been guessed
    letters.includes(letter, 0) &&
    guessedLetters.includes(letter, 0) === false
  ) {
    //   add the guessed letters to the guessed letters array
    guessedLetters.push(letter);
    printKeyPressed(letter);
    // decrease your guesses by 1 every time you guess
    guessesLeft--;
    // displayonscreen = printing
    displayOnScreen("guessesleft", `Guesses Left: ${String(guessesLeft)}`);
    // check if you guessed the correct letter
    if (String(letter) == String(randomLetter)) {
      winCount++;
      displayOnScreen("wins", `Wins: ${String(winCount)}`);
      newGame();
    }
    // they didnt win but they're out of guesses = game end, loss count goes up, displays loss count then new game
    if (guessesLeft === 0) {
      lossCount++;
      displayOnScreen("losses", `Losses: ${String(lossCount)}`);
      newGame();
    }
  }
}

function generateRandomLetter() {
  randomLetter = letters[Math.floor(Math.random() * letters.length)];
}
// printing the # of guesses that have occured, adding a comma after each letter guessed
function printKeyPressed(letter) {
  if (guessesLeft == 9) {
    document.getElementById("guessessofar").innerHTML += letter;
  } else {
    document.getElementById("guessessofar").innerHTML += ", " + letter;
  }
}
// reset the guesses back to 9
function resetGuesses() {
  guessesLeft = defaultGuessesLeft;
  displayOnScreen("guessesleft", `Losses: ${String(guessesLeft)}`);
  displayOnScreen("guessessofar", `Your Guesses so far: `);
}
//   update the text on screen of a particular div id. Div container=id, content is the text displayed
function displayOnScreen(divContainer, content) {
  document.getElementById(divContainer).innerHTML = content;
}
