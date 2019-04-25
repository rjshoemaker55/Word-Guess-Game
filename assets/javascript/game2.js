var spot1 = document.getElementById("spot1");
var spot2 = document.getElementById("spot2");
var spot3 = document.getElementById("spot3");
var spot4 = document.getElementById("spot4");
var spot5 = document.getElementById("spot5");
var spot6 = document.getElementById("spot6");
var spot7 = document.getElementById("spot7");
var spot8 = document.getElementById("spot8");
var spot9 = document.getElementById("spot9");

var guessesDiv = document.getElementById("guesses-div");
var textChanger = document.getElementById("text-changer");
var lettersGuessedDiv = document.getElementById("letters-guessed-div");

var spotArray = [
  spot1,
  spot2,
  spot3,
  spot4,
  spot5,
  spot6,
  spot7,
  spot8,
  spot9
];

var wordArray = [
  ["C", "H", "E", "E", "S", "E"],
  ["C", "R", "U", "S", "T"],
  ["S", "A", "U", "C", "E"],
  ["P", "E", "P", "P", "E", "R", "O", "N", "I"],
  ["D", "O", "U", "G", "H"]
]

var guesses = 15;
guessesDiv.textContent = guesses
var currentWordArray = wordArray[Math.round(Math.random() * 5)]
var blankSpaces = currentWordArray.length
var gameOver = false
var lettersGuessed = []




function setSpaces() {

  textChanger.textContent = "Guess a letter."
  guesses = 15;
  guessesDiv.textContent = guesses
  currentWordArray = wordArray[Math.round(Math.random() * 3)]
  blankSpaces = currentWordArray.length
  gameOver = false
  lettersGuessed = []
  lettersGuessedDiv.textContent = ""

  console.log(currentWordArray.length)
  console.log(currentWordArray)
  console.log("Word length: " + currentWordArray.length)

  for (var i = 0; i <= 8; i++) {
    if (currentWordArray.length >= (i + 1)) {
      console.log("currentWordArray is >= " + i)
      spotArray[i].style.display = "inline"
      spotArray[i].textContent = "_"
    } else {
      spotArray[i].style.display = "none"
    }
  }
  letterGuesser()
  return
}

function letterGuesser() {
  textChanger.textcontent = "Pick a letter."

  document.onkeyup = function (event) {
    if (guesses > 0) {
      var letterGuess = event.key;
      console.log("Key pressed " + letterGuess)
      letterGuess = letterGuess.toUpperCase()
      letterChecker(letterGuess)


    } else {
      console.log("no more guesses")
      gameOverLoss()
    }
  }
}

function letterChecker(letterGuess) {
  console.log("letters guessed: " + lettersGuessed)
  if (!(lettersGuessed.includes(letterGuess))) {
    console.log(lettersGuessed + " does not include " + letterGuess)
    lettersGuessed.push(letterGuess)
    lettersGuessedDiv.textContent = (lettersGuessed)
    if (currentWordArray.includes(letterGuess)) {
      console.log("letterChecker called")
      for (var i = 0; i <= currentWordArray.length - 1; i++) {
        console.log("checking if " + currentWordArray[i] + " is equal to " + letterGuess)
        if (currentWordArray[i] == letterGuess) {
          console.log(letterGuess + " was guessed, and is in spot " + i)
          spotArray[i].textContent = currentWordArray[i]
          blankSpaces--
          console.log("blank spaces left: " + blankSpaces)

          if (blankSpaces == 0) {
            gameOverWin();
            return;
          }
        }
      }


      letterGuesser();
      return;


    } else {
      guesses--
      console.log("Guesses left: " + guesses)
      guessesDiv.textContent = guesses

    }

  } else {

    console.log(lettersGuessed + " includes " + letterGuess)
  }
}


function gameOverWin() {
  textChanger.textContent = "YOU WIN! PRESS ANY KEY TO RESTART!"
  gameOver = true
  document.onkeyup = function() {
    setSpaces();
  }
}

function gameOverLoss() {
  textChanger.textContent = "YOU LOSE! PRESS ANY KEY TO RESTART!"
  gameOver = true

}

document.onkeyup = function() {
  setSpaces();
}
