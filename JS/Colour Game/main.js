var colours = generateRandomColours( 6 );

var squares = document.querySelectorAll( ".square" );
var pickedColour = pickRandomColour();
var colourDisplay = document.querySelector( "#colourDisplay" );
var messageDisplay = document.querySelector( "#message" )
colourDisplay.textContent = pickedColour;
var title = document.querySelector( "h1" );

for ( let index = 0; index < squares.length; index++ ) {
    squares[ index ].style.backgroundColor = colours[ index ];
    squares[ index ].addEventListener( "click", function () {
        var clickedColour = this.style.backgroundColor;
        console.log( clickedColour + " vs " + pickedColour );
        if ( clickedColour === pickedColour ) {
            messageDisplay.textContent = "Correct!";
            changeColours( clickedColour );
            title.style.backgroundColor = clickedColour;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again";
        }
    } );
}

function changeColours( colour ) {
    for ( let index = 0; index < squares.length; index++ ) {
        squares[ index ].style.backgroundColor = colour;
    }
}

function pickRandomColour() {
    var randomNumber = Math.floor( Math.random() * colours.length );
    return colours[ randomNumber ];
}

function generateRandomColours( numberOfColours ) {
    var collectionOfColours = [];
    for ( let index = 0; index < numberOfColours; index++ ) {
        collectionOfColours[ index ] = randomColour();
        console.log( collectionOfColours[ index ] );
    };
    return collectionOfColours;
}

function randomColour() {
    var red = Math.floor( Math.random() * 256 ),
        green = Math.floor( Math.random() * 256 ),
        blue = Math.floor( Math.random() * 256 );
    return "rgb(" + red + ", " + green + ", " + blue + ")";

}