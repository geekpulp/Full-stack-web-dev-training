var p = document.getElementsByTagName( "p" )[ 0 ];
var ul = document.querySelector( "ul" );

p.textContent = "This is the business";

// first select the element
var heading = document.querySelector( "h1" );
// then add the listener
heading.addEventListener( "click", function () {
    console.log( "SOMEONE CLICKED A HEADING!" );
    heading.style.fontSize = "100px";
} );