var playerOneScore = 0,
    playerTwoScore = 0,
    maxScore = document.querySelector( "#maxScoreInput" ).value,
    maxScoreDisplay = document.querySelector( "#maxScore" );

var playerOneButton = document.querySelector( "#playerOneButton" );
playerOneButton.addEventListener( "click", function () {
    score( "playerOne", playerOneScore )
} );

var playerTwoButton = document.querySelector( "#playerTwoButton" );
playerTwoButton.addEventListener( "click", function () {
    score( "playerTwo", playerTwoScore )
} );

var resetButton = document.querySelector( "#resetButton" );
resetButton.addEventListener( "click", function () {
    reset();
} );

var maxScoreInput = document.querySelector( "#maxScoreInput" )
maxScoreInput.addEventListener( "change", function () {
    maxScore = maxScoreInput.value;
} );

function score( player, playerScore ) {
    console.log( "player score: " + playerScore + " max score: " + maxScore );
    if ( playerScore == maxScore ) {
        alert( "Game over man, game over!" )
    } else {
        if ( player === "playerOne" ) {
            playerOneScore += 1;
            console.log( "Player One Score: " + playerOneScore );
        } else {
            playerTwoScore += 1;
            console.log( "Player Two Score: " + playerTwoScore );
        }
    }
    //check if the score is at the max score, if it is do nothing
    //increase the player score by one
    //update the display for player one by one then if it hits max score turn display green
}

function reset() {
    playerOneScore = 0;
    playerTwoScore = 0;
}