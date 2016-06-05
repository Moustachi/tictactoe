$(function() {
    function startGame() {
    	document.turn = "X"; //question: Does 'document' affect the way "X" is being store inside turn variable?
    	setMessage(document.turn + " gets to start.");
    }

    function setMessage(msg) {
    	document.getElementById("message").innerText = msg;
    }

    function nextMove(square) { //this function will change the inner text of a clicked square class with the value of document.turn then runs switchturn function
    	square.innerText = document.turn; //question: why isn't this function affecting all classes tagged with "square"?
    	switchTurn();
    }

    function switchTurn() {
    	if (document.turn == "X") {
    		document.turn = "O";
    	} else {
    		document.turn = "X";
    	}
    	setMessage("It's " + document.turn +"'s turn.")
    }// the O player is now playable. The table cells now need to be restricted to allow only one click allowed per cell.

   	$(".square").click(function(){ //when a square class is clicked, run nextMove(this)
   		nextMove(this);
   	});
    startGame();
});