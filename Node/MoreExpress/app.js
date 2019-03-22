"use strict"

var express = require( "express" );
var app = express();

app.get( "/", function( request, response ) {
  response.render( "home.ejs" );
} );

app.get( "/fallinlovewith/:thing", function( request, response ) {
  let thing = request.params.thing
  response.render( "love.ejs", {
    thingVar: thing
  } );
} );

app.get( "*", function( request, response ) {
  response.send( "Splat!" );
} )

// Tells express to listen for requests (Start server)

app.listen( 3000, function() {
  console.log( "The server started on http://localhost:3000/" );
} );