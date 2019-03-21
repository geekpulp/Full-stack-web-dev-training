"use strict"

var express = require( "express" );
var app = express();

app.get( "/", function( request, response ) {
  response.send( "Welcome to the desert of the real" );
} )


// Tells express to listen for requests (Start server)

app.listen( 3000, function() {
  console.log( "The server started on http://localhost:3000/" );
} );