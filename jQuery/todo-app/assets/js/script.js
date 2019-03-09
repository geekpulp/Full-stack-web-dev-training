// check off specific todos by clicking
$( "ul" ).on( "click", "li", function () {
    $( this ).toggleClass( "completed" );
} );

// click on x to delete todo item
$( "ul" ).on( "click", "span", function ( event ) {
    $( this ).parent().fadeOut( 300, function () {
        $( this ).remove();
    } );
    event.stopPropagation();
} );

// when the user presses enter a new item is added to the todo list
$( "input[type='text']" ).keypress( function ( event ) {
    if ( event.which === 13 ) {
        var todoItem = $( this ).val();
        $( this ).val( "" );
        $( "ul" ).append( "<li><span><i class='far fa-trash-alt'></i></span> " + todoItem + "</li>" );
    }
} );

$( ".fa-plus" ).click( function () {
    $( "input[type='text']" ).fadeToggle();
} );