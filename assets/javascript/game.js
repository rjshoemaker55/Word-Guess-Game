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
var currentWordArray = wordArray[Math.round(Math.random() * 3)]

console.log(currentWordArray.length)
console.log(currentWordArray);


function setSpaces() {
  console.log("Word length: " + currentWordArray.length)

  if (currentWordArray.length >= 1) {
    console.log("wordLength >= 1")
    spot1.style.display = "inline";
  } else {
    console.log("wordLength <= 1")
    spot1.style.display = "none";
  }

  if (currentWordArray.length >= 2) {
    console.log("wordLength >= 2")
    spot2.style.display = "inline";
  } else {
    console.log("wordLength <= 2")
    spot2.style.display = "none";
  }

  if (currentWordArray.length >= 3) {
    console.log("wordLength >= 3")
    spot3.style.display = "inline";
  } else {
    console.log("wordLength <= 3")
    spot3.style.display = "none";
  }

  if (currentWordArray.length >= 4) {
    console.log("wordLength >= 4")
    spot4.style.display = "inline";
  } else {
    console.log("wordLength <= 4")
    spot4.style.display = "none";
  }

  if (currentWordArray.length >= 5) {
    console.log("wordLength >= 5")
    spot5.style.display = "inline";
  } else {
    console.log("wordLength <= 5")
    spot5.style.display = "none";
  }

  if (currentWordArray.length >= 6) {
    console.log("wordLength >= 6")
    spot6.style.display = "inline";
  } else {
    console.log("wordLength <= 6")
    spot6.style.display = "none";
  }

  if (currentWordArray.length >= 7) {
    console.log("wordLength >= 7")
    spot7.style.display = "inline";
  } else {
    console.log("wordLength <= 7")
    spot7.style.display = "none";
  }

  if (currentWordArray.length >= 8) {
    console.log("wordLength >= 8")
    spot8.style.display = "inline";
  } else {
    console.log("wordLength <= 8")
    spot8.style.display = "none";
  }

  if (currentWordArray.length >= 9) {
    console.log("wordLength >= 9")
    spot9.style.display = "inline";
  } else {
    console.log("wordLength <= 9")
    spot9.style.display = "none";
  }
  return
}

function guessLetter(letterGuess) {

  var letterGuess = letterGuess.toUpperCase();

  if (currentWordArray.includes(letterGuess)) {
    console.log("Word includes " + letterGuess)
    var letterIndex = currentWordArray.indexOf(letterGuess)
    console.log("Index of " + letterGuess + " is " + letterIndex)
    spotArray[letterIndex].textContent = currentWordArray[letterIndex];
  } else {
    console.log("Word does not include " + letterGuess)
    guesses--;
  }

  var blankSpots = 0;
  for (i=0; i <= currentWordArray.length; i++) {


  if (spotArray[i].textContent === "_") {
    blankSpots++;
  }

  if (blankSpots = currentWordArray.length) {
    textChanger.textContent = "YOU WIN!"
  }
  console.log("Blank spots: " + blankSpots)
}
    guessesDiv.textContent = guesses;
    letterListen();
}

setSpaces();
letterListen();
guessesDiv.textContent = guesses;


function letterListen() {
if (guesses > 0) {
  console.log("Guesses is over 0.")
  document.onkeyup = function(event) {
    guessLetter(event.key);
  }
} else {
  console.log("No more guesses.")
  gameOver();
}
}

function gameOver() {
   spotArray[0].textContent = currentWordArray[0];
   spotArray[1].textContent = currentWordArray[1]
   spotArray[2].textContent = currentWordArray[2]
   spotArray[3].textContent = currentWordArray[3]
   spotArray[4].textContent = currentWordArray[4]
   spotArray[5].textContent = currentWordArray[5]
   spotArray[6].textContent = currentWordArray[6]
   spotArray[7].textContent = currentWordArray[7]
   spotArray[8].textContent = currentWordArray[8]
   textChanger.textContent = "GAME OVER!";


    console.log("changed!");
}
