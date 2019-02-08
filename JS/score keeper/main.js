playerOneButton = document.querySelector( "#playerOneButton" );

playerOneButton.addEventListener( "click", function () {
    updateScore( "playerOne" )
} );

var playerTwoButton = document.querySelector( "#playerTwoButton" );

playerTwoButton.addEventListener( "click", function () {
    updateScore( "playerTwo" )
} );

var resetButton = document.querySelector( "#resetButton" );

resetButton.addEventListener( "click", function () {
    reset();
} );

var maxScoreInput = document.querySelector( "#maxScoreInput" ),
    maxScoreDisplay = document.querySelector( "#maxScore" );

maxScoreInput.addEventListener( "change", function () {
    setMaxScore( maxScoreInput.value );
} );

function setMaxScore( maxScoreValue ) {
    maxScoreDisplay.textContent = maxScoreValue.toString();
    maxScoreInput.value = maxScoreValue;
}



var playerOneScore = 0,
    playerTwoScore = 0,
    playerOneScoreDisplay = document.querySelector( "#playerOneScore" ),
    playerTwoScoreDisplay = document.querySelector( "#playerTwoScore" );

// update the score when someone clicks a button    
function updateScore( player ) {
    if ( gameOver() ) {
        alert( "Game over man, game over!" )
    } else {
        if ( player === "playerOne" ) {
            playerOneScore += 1;
        } else {
            playerTwoScore += 1;
        }
        updateScoreDisplay( player );
    }
}

// Updating the the display to of player score
function updateScoreDisplay( player ) {
    if ( player === "playerOne" ) {
        console.log( "Player One Score: " + playerOneScore );
        playerOneScoreDisplay.textContent = playerOneScore.toString();
    } else {
        console.log( "Player Two Score: " + playerTwoScore );
        playerTwoScoreDisplay.textContent = playerTwoScore.toString();
    }
}

// determines if the game is over or not
function gameOver() {
    return playerOneScore == maxScoreInput.value || playerTwoScore == maxScoreInput.value;
}

// Reset everything to the default
function reset() {
    playerOneScore = 0;
    playerTwoScore = 0;
    updateScoreDisplay( "playerOne" );
    updateScoreDisplay( "playerTwo" );
    setMaxScore( 5 );
}