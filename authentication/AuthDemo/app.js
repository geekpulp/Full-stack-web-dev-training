"use strict"

//install these using "npm i express mongoose body-parser"
const bodyParser = require( "body-parser" ),
  mongoose = require( "mongoose" ),
  express = require( "express" ),
  app = express();

mongoose.connect( "mongodb://localhost/authDemo", {
  useNewUrlParser: true
} );
app.set( "view engine", "ejs" );
app.use( express.static( "public" ) );
app.use( bodyParser.urlencoded( {
  extended: true
} ) );

app.get( "/", function( req, res ) {
  res.render( "home" );
} );

app.get( "/secret", function( req, res ) {
  res.render( "secret" );
} );

app.get( "*", function( req, res ) {
  res.send( "404 page not found" );
} )

// Tells express to listen for requests (Start server)

app.listen( 3011, function() {
  console.log( "The server started on http://localhost:3011/" );
} );