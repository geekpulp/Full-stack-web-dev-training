"use strict"

var express = require( "express" );
var app = express();
var bodyParser = require( 'body-parser' );
let campgrounds = [ {
  name: "Palmerston North Holiday Park",
  image: "https://www.holidayparks.co.nz/sites/default/files/styles/park_gallery/public/parks/Palm%20North%20Holiday%20Park%20004.jpg"
}, {
  name: "Feilding Holiday Park",
  image: "https://cdn.tribalogic.net/uploads/0e/435036-feilding-holiday-park-1.jpg"
}, {
  name: "Himatangi Holiday Park",
  image: "https://www.holidayparks.co.nz/sites/default/files/styles/park_gallery/public/parks/Camp%20photo%20from%20airplane.jpg"
}, {
  name: "Foxton Beach Top 10 Holiday Park",
  image: "https://media-cdn.tripadvisor.com/media/photo-s/04/2c/a5/fc/foxton-beach-motor-camp.jpg"
} ];

app.use( bodyParser.urlencoded( {
  extended: true
} ) );
app.set( "view engine", "ejs" );

app.get( "/", function( req, res ) {
  res.render( "landing" );
} );

app.get( "/campgrounds", function( req, res ) {
  res.render( "campgrounds", {
    campgrounds: campgrounds
  } );
} );

app.post( "/campgrounds", function( req, res ) {
  // get data from form and add back to campgound array
  const name = req.body.name;
  const image = req.body.image;
  const newCampground = {
    name: name,
    image: image
  }
  campgrounds.push( newCampground );
  // redirect back to campgrounds
  res.redirect( "/campgrounds" );
} );

app.get( "/campgrounds/new", function( req, res ) {
  res.render( "new" );
} );

app.get( "*", function( req, res ) {
  res.send( "404 page not found" );
} );

// Tells express to listen for requests (Start server)

app.listen( 3000, function() {
  console.log( "The server started on http://localhost:3000/" );
} );