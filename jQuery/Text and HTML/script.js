$( 'img' ).css( 'width', 500 );
console.log( "bananas" );
$( "h1" ).on( "click", function() {
  $( "img" ).slideToggle( 1000, function() {
    // $( this ).remove();
  } );
} );