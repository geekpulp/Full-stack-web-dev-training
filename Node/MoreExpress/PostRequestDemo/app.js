"use strict"

var express = require( "express" );
var app = express();
var bodyParser = require( "body-parser" );

app.set( "view engine", "ejs" );

app.get( "/", function( request, response ) {
  response.render( "home" );
} )

app.get( "/teams", function( request, response ) {
  let teams = [ "Planning and Transformation", "Digital", "Application Development", "Application Support", "Infrustcture", "Service Desk", "Business Systems Support", "Architecture" ];
  response.render( "teams", {
    teams: teams
  } );
} )

app.post( "/addteam", function( request, response ) {
  console.log( request.body );
  response.send( "You have reached the post route" )
} );

app.get( "*", function( request, response ) {
  response.send( "404 page not found" );
} )

// Tells express to listen for requests (Start server)

app.listen( 3000, function() {
  console.log( "The server started on http://localhost:3000/" );
} );