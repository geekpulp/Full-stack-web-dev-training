if ( jQuery ) {
  console.log( "Jquery is loaded" );
} else {
  console.log( "Jquery is not loaded" );
}

$( "div" ).css( "backgroundColor", "purple" );
$( ".highlight" ).css( "width", "200px" );
$( "#third" ).css( "border", "4px solid orange" );
$( "div:first-of-type" ).css( "color", "pink" );