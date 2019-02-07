playerOneButton = document.querySelector( "#playerOneButton" );

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
    setMaxScore( maxScoreInput.value );
} );

var playerOneScore = 0,
    playerTwoScore = 0,
    maxScore = 5;

function score( player, playerScore ) {
    if ( playerScore === parseInt( maxScore, 10 ) ) {
        alert( "Game over man, game over!" )
    } else {
        if ( player === "playerOne" ) {
            playerOneScore += 1;
            updateScoreDisplay( player );
        } else {
            playerTwoScore += 1;
            updateScoreDisplay( player );
        }
    }
}


maxScoreDisplay = document.querySelector( "#maxScore" );

function setMaxScore( maxScoreValue ) {
    maxScoreDisplay.textContent = maxScoreValue.toString();
    maxScoreInput.value = maxScoreValue;
    maxScore = maxScoreValue;
}


function updateScoreDisplay( player ) {
    var playerOneScoreDisplay = document.querySelector( "#playerOneScore" );
    var playerTwoScoreDisplay = document.querySelector( "#playerTwoScore" );
    if ( player === "playerOne" ) {
        console.log( "Player One Score: " + playerOneScore );
        playerOneScoreDisplay.textContent = playerOneScore.toString();
    } else {
        console.log( "Player Two Score: " + playerTwoScore );
        playerTwoScoreDisplay.textContent = playerTwoScore.toString();
    }
}


function reset() {
    playerOneScore = 0;
    playerTwoScore = 0;
    updateScoreDisplay( "playerOne" );
    updateScoreDisplay( "playerTwo" );
    setMaxScore( 5 );
}