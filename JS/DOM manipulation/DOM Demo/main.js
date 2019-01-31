var p = document.getElementsByTagName( "p" )[ 0 ];
var ul = document.querySelector( "ul" );

p.textContent = "This is the business";

// first select the element
var button = document.querySelector( "button" );
var heading = document.querySelector( "h1" );
// then add the listener
button.addEventListener( "click", function () {
    console.log( "SOMEONE CLICKED A HEADING!" );
    heading.textContent = "Someone clicked the button!";
} );

// This is a common pattern in interaction. 
var listItems = document.querySelectorAll( "li" );
for ( var i = 0; i < listItems.length; i++ ) {
    listItems[ i ].addEventListener( "click", function () {
        this.style.color = "pink";
    } );
}

//this is a good example for a blog post
// var buttons = document.querySelectorAll( "button" );
// var background = document.querySelector( "body" );

// buttons[ 1 ].addEventListener( "click", function () {
//     if ( background.style.background === "white" ) {
//         background.style.background = "purple";
//     } else {
//         background.style.background = "white";
//     }
// } );

// a better way, always remember the separation of concerns
var buttons = document.querySelectorAll( "button" );
buttons[ 1 ].addEventListener( "click", function () {
    document.body.classList.toggle( "purple" );
} );