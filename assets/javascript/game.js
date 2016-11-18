//Track # of wins
//Track # of losses
//Track # of guesses left
//Track guesses so far

var letters = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];

var wins= 0;
var losses= 0;
var guessesleft= 10

var key = event.key

var computerchoice = letters[Math.random();
console.log(letters.charAt(0));

// var random= Math.random()
// console.log(letters.charAt(0))

document.onkeyup = function() {
	computerchoice = letters[Math.random()];
	console.log(computerchoice);

	var userchoice = letters();
	console.log(userchoice);

	if (userchoice == computerchoice) {
		console.log("You win!");
		wins++
	} else {
		guessesleft - 1;

	}

	if (guessesleft==0) {
		console.log("You lose!");
		losses++;
	}

	var html = "<p>Your Guesses So Far: " + userchoice + "</p>" +
	"<p>Wins: " + wins + "</p>" + 
	"<p>Losses:" + losses + "</p>" +
	"<p>Guesses Left:" + guessesleft + "</p>"

	document.querySelector('#game').innerHTML = html;

	document.querySelector("#textToShow").innerHTML = word

}
