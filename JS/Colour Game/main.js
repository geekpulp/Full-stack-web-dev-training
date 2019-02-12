var colours = [ "rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 0, 255)", "rgb(0, 255, 255)" ]

var squares = document.querySelectorAll( ".square" );
var pickedColour = colours[ 3 ];
var colourDisplay = document.querySelector( "#colourDisplay" );

colourDisplay.textContent = pickedColour;

for ( let index = 0; index < squares.length; index++ ) {
    squares[ index ].style.backgroundColor = colours[ index ];
    squares[ index ].addEventListener( "click", function () {
        var clickedColour = this.style.backgroundColor;
        console.log( clickedColour + " vs " + pickedColour );
        if ( clickedColour === pickedColour ) {
            alert( "We have a winner!" )
        } else {
            alert( "Try again" )
        }
    } );
}