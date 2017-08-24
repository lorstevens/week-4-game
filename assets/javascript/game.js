

//Variables
var totalScore= 0;
var winCounter= 0;
var lossCounter= 0;


//Create a random number between 19-120

var randomNumber = Math.floor((Math.random() * 100) + 19);
	console.log(randomNumber);
	$("#computernumber").html(randomNumber);





//add click function on the aCrystal class

	$(".aCrystal").on("click", function() {
       var crystalRandomNumber = Math.floor((Math.random() * 12) + 1);
       console.log(crystalRandomNumber);
       totalScore = totalScore + crystalRandomNumber;
    	console.log("New userTotal= " + totalScore);
    	$("#yourguesses").html(totalScore);


	    	if (totalScore == randomNumber) {
				winCounter++;
				$("#wins").html("Wins: " + winCounter);
				alert("Hurray! You win!");
				reset();
			}

			else if (totalScore > randomNumber) {
				lossCounter++;
				$("#losses").html("Losses: " + lossCounter);
				alert("Yikes! You lost!");
				reset();
			}		

    });



//create reset function. When reset function is called, total score resets and random numbers change.
var reset = function (){

	totalScore= 0;
	randomNumber = Math.floor((Math.random() * 100) + 19);
		$("#computernumber").html(randomNumber);

}


