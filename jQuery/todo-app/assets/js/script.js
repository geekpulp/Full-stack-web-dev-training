// check off specific todos by clicking
$( "li" ).click( function () {
    $( this ).toggleClass( "completed" );
} );

// click on x to delete todo item
$( "span" ).click( function ( event ) {
    $( this ).parent().fadeOut( 300, function () {
        $( this ).remove();
    } );
    event.stopPropagation();
} );