"use strict"

const express = require( "express" ),
  app = express(),
  bodyParser = require( 'body-parser' ),
  mongoose = require( "mongoose" )

mongoose.connect( "mongodb://localhost/yelp-camp", {
  useNewUrlParser: true
} );

// Schema setup
const campgroundSchema = new mongoose.Schema( {
  name: String,
  image: String
} );

const Campground = mongoose.model( "Campground", campgroundSchema );

// Campground.create( {
//     name: "Foxton Beach Top 10 Holiday Park",
//     image: "https://media-cdn.tripadvisor.com/media/photo-s/04/2c/a5/fc/foxton-beach-motor-camp.jpg"
//   },
//   function( error, campground ) {
//     if ( error ) {
//       console.log( error );
//     } else {
//       console.log( "Boom we have a campground" );
//       console.log( campground );
//     }
//   }
// )

app.use( bodyParser.urlencoded( {
  extended: true
} ) );
app.set( "view engine", "ejs" );

app.get( "/", function( req, res ) {
  res.render( "landing" );
} );

app.get( "/campgrounds", function( req, res ) {
  Campground.find( {}, function( error, allCampgrounds ) {
    if ( error ) {
      console.log( error );
    } else {
      res.render( "campgrounds", {
        campgrounds: allCampgrounds
      } );
    }
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
  Campground.create( newCampground, function( error, newlyCreated ) {
    if ( error ) {
      console.log( error );
    } else {
      // redirect back to campgrounds
      res.redirect( "/campgrounds" );
    }
  } )

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