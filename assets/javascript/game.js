var guessesLeft = 10;
var wins = 0;
var losses = 0;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var userLetter;
var computerLetter;

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("guessedLetters").innerHTML = guessedLetters;

function randomLetter() {
	var x = Math.floor(Math.random() * 26);
	computerLetter = alphabet[x];
	guessedLetters = [];
	// console.log(computerLetter);
};

document.onkeyup = function() {
	userLetter = String.fromCharCode(event.keyCode).toLowerCase();
	alert("You guessed " + userLetter);
	guessedLetters.push(userLetter);
	document.getElementById("guessedLetters").innerHTML = guessedLetters;
	compareGuess();
};

function reset() {
	computerLetter = alphabet[Math.floor(Math.random() * 26)];
	// console.log(computerLetter);
	guessedLetters = [];
	document.getElementById("guessedLetters").innerHTML = guessedLetters;
	guessesLeft = 10;
	document.getElementById("guessesLeft").innerHTML = guessesLeft;
};

function compareGuess() {
	guessesLeft--;
	document.getElementById("guessesLeft").innerHTML = guessesLeft;

	if (userLetter === computerLetter) {
		alert("Dumb luck. See if you can do it again!");
		wins++;
		document.getElementById("wins").innerHTML = wins;
		reset();
	}

	else if (guessesLeft == 0) {
		alert("YOU LOSE! YOU GET NOTHING! GOOD DAY, SIR!");
		losses++;
		document.getElementById("losses").innerHTML = losses;
		reset();
	}
	else {
		alert("Did you get your psychic certificate from a Cracker Jack box? Try again.")
	}
};