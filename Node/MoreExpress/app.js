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

app.get( "/posts", function( request, response ) {
  let posts = [ {
      title: "JS and you",
      Author: "Glen Young"
    },
    {
      title: "Harry Potter",
      Author: "Emma Young"
    },
    {
      title: "Ben Ten a the wonders of Netflix",
      Author: "Alex Young"
    },
  ]
  response.render( "posts.ejs", {
    posts: posts
  } );
} );

app.get( "*", function( request, response ) {
  response.send( "Splat!" );
} )

// Tells express to listen for requests (Start server)

app.listen( 3000, function() {
  console.log( "The server started on http://localhost:3000/" );
} );