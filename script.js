$(function() {
    function startGame() {
    	document.turn = "X";
    	if (Math.random() < 0.5) {
    		document.turn = "O";
    	}
    	document.winner = null;//winner variable has been created to keep track of the winner, which is currently set to nothing.
    	setMessage(document.turn + " gets to start.");
    }

    function setMessage(msg) {
    	document.getElementById("message").innerText = msg;
    }

    function nextMove(square) {
    	if (document.winner != null) { // of document.winner has been turned into document.turn by switchTurn function, then display the already won message.
    		setMessage(document.winner + " already won the game.");
    	} else if (square.innerText == "") {
    		square.innerText = document.turn;
    		switchTurn();
    	} else {
    		setMessage("That square is already used.");
    	}
    }

    function switchTurn() {
    	if (checkForWinner(document.turn)) {
    		setMessage("Congratualtions, " + document.turn + "! You win!");
    		document.winner = document.turn; //if a player has been chose as the winner, change doc.winner's value to doc.turn's
    	} else if (document.turn == "X") {
    		document.turn = "O";
    		setMessage("It's " + document.turn +"'s turn.");
    	} else {
    		document.turn = "X";
    		setMessage("It's " + document.turn +"'s turn.");
    	}
    }

    function checkForWinner(player) {
    	var result = false;
    	if (checkThreeInRow(1, 2, 3, player) ||
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

    function checkThreeInRow(a, b, c, player) {
    	var result = false;
    	if (getBox(a) == player && getBox(b) == player && getBox(c) == player) {
    		result = true;
    	}
    	return result;
    }

    function getBox(number) {
    	return document.getElementById("s" + number).innerText;
    }

   	$(".square").click(function(){
   		nextMove(this);
   	});
    startGame();
});