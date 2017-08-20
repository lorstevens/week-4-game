

//Variables
var totalScore= 0;
var winCounter= 0;
var lossCounter= 0;


//Create a random number between 19-120

var randomNumber = Math.floor((Math.random() * 100) + 19);
	console.log(randomNumber);
	$("#computernumber").html(randomNumber);


//Assign a random value between 1-12 to each image

var green = Math.floor((Math.random() * 12) + 1);
	$("#green").html(green);
var pink = Math.floor((Math.random() * 12) + 1);
	$("#pink").html(pink);
var red = Math.floor((Math.random() * 12) + 1);
	$("#red").html(red);
var gray = Math.floor((Math.random() * 12) + 1);
	$("#gray").html(gray);

	console.log("green " + green);
	console.log("pink " + pink);
	console.log("red " + red);
	console.log("gray " + gray);


//Add the on click function to the crystals


$("#green").on("click", function() {
       // $("#yourguesses").html(green);
       totalScore= totalScore + green;
    	console.log("New userTotal= " + totalScore);
    	$("#yourguesses").html(totalScore);

    	// playGame ();
      });

$("#pink").on("click", function() {
       // $("#yourguesses").html(pink);
       totalScore= totalScore + pink;
    	console.log("New userTotal= " + totalScore);
    	$("#yourguesses").html(totalScore);

    	// playGame ();
      });

$("#red").on("click", function() {
       // $("#yourguesses").html(red);
       totalScore= totalScore + red;
    	console.log("New userTotal= " + totalScore);
    	$("#yourguesses").html(totalScore);

    	// playGame ();
      });

$("#gray").on("click", function() {
       // $("#yourguesses").html(gray);
       totalScore= totalScore + gray;
    	console.log("New userTotal= " + totalScore);
    	$("#yourguesses").html(totalScore);

    	// playGame ();
      });


//create reset function
var reset = function (){
	totalScore = 0;

var green = Math.floor((Math.random() * 12) + 1);
var pink = Math.floor((Math.random() * 12) + 1);
var red = Math.floor((Math.random() * 12) + 1);
var gray = Math.floor((Math.random() * 12) + 1);

}

//create function if user wins

var playGame = function (){
	if (totalScore == randomNumber) {
		winCounter++
		$("wins").html(winCounter);
		alert("Hurray! You win!");
	}

	else if (totalScore > randomNumber) {
		lossCounter++
		$("losses").html(lossCounter);
		alert("Yikes! You lost!");
	}

	else {
		reset();
	}
}


