"use strict"

var express = require( "express" );
var app = express();
var request = require( "request" );
app.set( "view engine", "ejs" );

app.get( "/", function( req, res ) {
  res.render( "search" );
} )

app.get( "/results", function( req, res ) {
  const query = req.query.search;
  const url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
  request( url, function( error, response, body ) {
    if ( !error && response.statusCode == 200 ) {
      const parsedData = JSON.parse( body );
      // res.send( parsedData[ "Search" ][ 0 ][ "Title" ] );
      res.render( "results", {
        data: parsedData
      } );
    }
  } );
} );

app.get( "*", function( request, response ) {
  response.send( "404 page not found" );
} )

// Tells express to listen for requests (Start server)

app.listen( 3000, function() {
  console.log( "The server started on http://localhost:3000/" );
} );