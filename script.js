$(function() {
	var turn = "";
	var winner = null;
    function startGame() {
    	turn = "X";
    	if (Math.random() < 0.5) {
    		turn = "O";
    	}
    	winner = null;
    	setMessage(turn + " gets to start.");
    }

    function setMessage(msg) {
    	document.getElementById("message").innerText = msg;
    }

    function nextMove(square) {
    	if (winner != null) {
    		setMessage(winner + " already won the game.");
    	} else if (square.innerText == "") {
    		square.innerText = turn;
    		switchTurn();
    	} else {
    		setMessage("That square is already used.");
    	}
    }

    function switchTurn() {
    	if (checkForWinner(turn)) {
    		setMessage("Congratualtions, " + turn + "! You win!");
    		winner = turn;
    	} else if (turn == "X") {
    		turn = "O";
    		setMessage("It's " + turn +"'s turn.");
    	} else {
    		turn = "X";
    		setMessage("It's " + turn +"'s turn.");
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