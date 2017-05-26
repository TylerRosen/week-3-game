//Track # of wins
//Track # of losses
//Track # of guesses left
//Track guesses so far

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesleft = 10;
var guesses = [];

var computerchoice = letters[Math.floor(Math.random() * letters.length)];
var correctletter = letters[computerchoice]


var random = Math.random()

document.onkeyup = function () {
	var key = event.key;
	guesses.push(key);

	correctletter = computerchoice[Math.floor(Math.random() * (letters.length))]
	console.log(computerchoice)


	var userchoice = String.fromCharCode(event.keyCode).
		toLowerCase();
	console.log(userchoice);

	if (userchoice == computerchoice) {
		console.log("You win!");
		wins++
		guessesleft = 10
		guesses = []
		computerchoice = letters[Math.floor(Math.random() * letters.length)];

	} else {
		guessesleft--

	}


	if (guessesleft == 0) {
		console.log("You lose!");
		losses++;
		guessesleft = 10
		guesses = [];
		computerchoice = letters[Math.floor(Math.random() * (letters.length))]
	}

	var html = "<p>Guess what letter I'm thinking of</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesleft + "</p>" +
		"<p>Your Guesses So Far: " + guesses + "</p>"

	document.querySelector('#game').innerHTML = html;

}