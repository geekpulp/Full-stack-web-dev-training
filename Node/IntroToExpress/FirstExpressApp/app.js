var express = require( "express" );
var app = express();

// todo "/" => "Hi there!"
app.get( "/", function( request, response ) {
  response.send( "Hi there!" );
} )

// "/bye" => "Goodbye!"
app.get( "/bye", function( request, response ) {
  response.send( "Goodbye!" );
} )

// "/dog" => "MEOW!"
app.get( "/dog", function( request, response ) {
  response.send( "WOOF!" );
} )

app.get( "/cat", function( request, response ) {
  response.send( "MEOW!" );
} )

app.listen( 3000, function() {
  console.log( "The server has started on port 3000" );
} );