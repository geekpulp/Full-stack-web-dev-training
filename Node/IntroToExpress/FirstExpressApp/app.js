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

// This example shows the use or route parameters. This allows us to created dynamic routes

app.get( "/blog/:date/:title/", function( request, response ) {
  var blogPostDate = request.params.date;
  var blogPostTitle = request.params.title;
  response.send( blogPostTitle + " Published " + blogPostDate );
} )

app.get( "*", function( request, response ) {
  response.send( "Splat!" );
} )

// Tells express to listen for requests (Start server)

app.listen( 3000, function() {
  console.log( "The server started on http://localhost:3000/" );
} );