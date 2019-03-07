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
  "R",
  "A",
  "Y",
  "M",
  "O",
  "N",
  "D"
];

var guesses = 15;

console.log(wordArray.length)

function setSpaces() {
  console.log("Word length: " + wordArray.length)

  if (wordArray.length >= 1) {
    console.log("wordLength >= 1")
    spot1.style.display = "inline";
  } else {
    console.log("wordLength <= 1")
    spot1.style.display = "none";
  }

  if (wordArray.length >= 2) {
    console.log("wordLength >= 2")
    spot2.style.display = "inline";
  } else {
    console.log("wordLength <= 2")
    spot2.style.display = "none";
  }

  if (wordArray.length >= 3) {
    console.log("wordLength >= 3")
    spot3.style.display = "inline";
  } else {
    console.log("wordLength <= 3")
    spot3.style.display = "none";
  }

  if (wordArray.length >= 4) {
    console.log("wordLength >= 4")
    spot4.style.display = "inline";
  } else {
    console.log("wordLength <= 4")
    spot4.style.display = "none";
  }

  if (wordArray.length >= 5) {
    console.log("wordLength >= 5")
    spot5.style.display = "inline";
  } else {
    console.log("wordLength <= 5")
    spot5.style.display = "none";
  }

  if (wordArray.length >= 6) {
    console.log("wordLength >= 6")
    spot6.style.display = "inline";
  } else {
    console.log("wordLength <= 6")
    spot6.style.display = "none";
  }

  if (wordArray.length >= 7) {
    console.log("wordLength >= 7")
    spot7.style.display = "inline";
  } else {
    console.log("wordLength <= 7")
    spot7.style.display = "none";
  }

  if (wordArray.length >= 8) {
    console.log("wordLength >= 8")
    spot8.style.display = "inline";
  } else {
    console.log("wordLength <= 8")
    spot8.style.display = "none";
  }

  if (wordArray.length >= 9) {
    console.log("wordLength >= 9")
    spot9.style.display = "inline";
  } else {
    console.log("wordLength <= 9")
    spot9.style.display = "none";
  }

}

function guessLetter(letterGuess) {

  var letterGuess = letterGuess.toUpperCase();

  if (wordArray.includes(letterGuess)) {
    console.log("Word includes " + letterGuess)
    var letterIndex = wordArray.indexOf(letterGuess)
    console.log("Index of " + letterGuess + " is " + letterIndex)
    spotArray[letterIndex].textContent = wordArray[letterIndex];
  } else {
    console.log("Word does not include " + letterGuess)
    guesses--;
  }
    guessesDiv.textContent = guesses;
    /* SUBTRACT POINT/ADD LETTER TO GUESSED */

}

setSpaces();
guessesDiv.textContent = guesses;

if(guesses >= 0) {
  document.onkeyup = function(event) {
    guessLetter(event.key);
  }
}
