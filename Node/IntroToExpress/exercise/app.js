"use strict"

var express = require( "express" );
var app = express();

app.get( "/", function( request, response ) {
  response.send( "Hi there, welcome to my exercise!" );
} )

app.get( "/speak/:animal", function( request, response ) {
  const sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof woof!",
    cat: "I hate you human",
    goldfish: "..."
  }
  const animal = request.params.animal.toLowerCase();
  const animalSound = sounds[ animal ];

  response.send( "The " + animal + " says ''" + animalSound + "''" );
} )


app.get( "/repeat/:wordToRepeat/:numberOfTimesToRepeat", function( request, response ) {
  const word = request.params.wordToRepeat;
  const number = request.params.numberOfTimesToRepeat;
  let stringToReturn = "";
  for ( let i = 0; i < number; i++ ) {
    stringToReturn = stringToReturn + word + " ";
  }
  response.send( stringToReturn );
} )

app.get( "/blog/:date/:title/", function( request, response ) {
  const blogPostDate = request.params.date;
  const blogPostTitle = request.params.title;
  response.send( blogPostTitle + " Published " + blogPostDate );
} )

app.get( "*", function( request, response ) {
  response.send( "Sorry, page not found... What are you doing with your life?" );
} )

// Tells express to listen for requests (Start server)

app.listen( 3000, function() {
  console.log( "The server started on http://localhost:3000/" );
} );