$(function() {
    function startGame() {
    	document.turn = "X"; //question: Does 'document' affect the way "X" is being store inside turn variable?
    	setMessage(document.turn + " gets to start.");
    }

    function setMessage(msg) {
    	document.getElementById("message").innerText = msg;
    }

    function nextMove(square) { //this function will change the inner text of a clicked square class with the value of document.turn then runs switchturn function
    	if(square.innerText == ""){//if the innerText of square is "", then allow the following to run, or else
    		square.innerText = document.turn; //question: why isn't this function affecting all classes tagged with "square"?
    		switchTurn();
    	} else {// let the user know that square has been used already
    		setMessage("That square is already used.");
    	}
    }

    function switchTurn() {
    	if (checkForWinner(document.turn)) {
    		setMessage("Congratualtions, " + document.turn + "! You win!"); //initially, check to see if there's a winner, if none then continue the game.
    	} else if (document.turn == "X") { //this if statement changes the player to the opposite player and updates the message to display current player's turn.
    		document.turn = "O";
    		setMessage("It's " + document.turn +"'s turn.");
    	} else {
    		document.turn = "X";
    		setMessage("It's " + document.turn +"'s turn.");
    	}
    }

    function checkForWinner(player) { // This function evaluates if any provided combination has been called by the specific player
    	var result = false;
    	if (checkThreeInRow(1, 2, 3, player) ||//the checkThree var is given numbers 1, 2, and 3.
    		checkThreeInRow(4, 5, 6, player) ||
    		checkThreeInRow(7, 8, 9, player) ||
    		checkThreeInRow(1, 4, 7, player) ||
    		checkThreeInRow(2, 5, 8, player) ||
    		checkThreeInRow(3, 6, 9, player) ||
    		checkThreeInRow(1, 5, 9, player) ||
    		checkThreeInRow(3, 5, 7, player)) {
    		result = true;
    	}
    	return result;
    }

    function checkThreeInRow(a, b, c, player) { //This function takes s1, s2, s3 and evaluates if it's been clicked or not.
    	var result = false;
    	if (getBox(a) == player && getBox(b) == player && getBox(c) == player) {
    		result = true;
    	}
    	return result;
    }

    function getBox(number) { //This function returns innerText of s + the number provided by checkForWinner var.
    	return document.getElementById("s" + number).innerText;
    }

   	$(".square").click(function(){ //when a square class is clicked, run nextMove(this)
   		nextMove(this);
   	});
    startGame();
});

//switchTurn basically takes document.turn's current value that throws it into a gaunlet of evaluators, checking
//to see if document.turn's value match any cells that's been called/clicked-on with the same value. If document.turn's
//value matches any of the combination of cells with the same matching value, then set the game over message.