"use strict"

const express = require( "express" ),
  app = express(),
  bodyParser = require( 'body-parser' ),
  mongoose = require( "mongoose" ),
  Campground = require( "./models/campground" ),
  seedDB = require( "./seeds" )

mongoose.connect( "mongodb://localhost/yelp-camp", {
  useNewUrlParser: true
} );

app.use( bodyParser.urlencoded( {
  extended: true
} ) );
app.set( "view engine", "ejs" );

app.get( "/", function( req, res ) {
  res.redirect( "/campgrounds" );
} );

//seedDB();

//INDEX - Restful route shows all campgrounds
app.get( "/campgrounds", function( req, res ) {
  Campground.find( {}, function( error, allCampgrounds ) {
    if ( error ) {
      console.log( error );
    } else {
      res.render( "campgrounds/index", {
        campgrounds: allCampgrounds
      } );
    }
  } );
} );

//CREATE - Restful route create new campground
app.post( "/campgrounds", function( req, res ) {
  // get data from form and add back to campground array
  const name = req.body.name;
  const image = req.body.image;
  const description = req.body.description;
  const newCampground = {
    name: name,
    image: image,
    description: description
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

//NEW - Restful route shows form to create new campground
app.get( "/campgrounds/new", function( req, res ) {
  res.render( "campgrounds/new" );
} );


//SHOW - Restful route which shows a specific campground
app.get( "/campgrounds/:id", function( req, res ) {
  Campground.findById( req.params.id ).populate( "comments" ).exec( function( error, foundCampground ) {
    if ( error ) {
      console.log( error );
    } else {
      res.render( "campgrounds/show", {
        campground: foundCampground
      } );
    }
  } );

} );

//================
//COMMENTS SUB ROUTES
//================

app.get( "/campgrounds/:id/comments/new", function( req, res ) {
  Campground.findById( req.params.id ),
    function( error, foundCampground ) {
      if ( error ) {
        console.log( error );
      } else {
        res.render( "comments/new", {
          campground: foundCampground
        } );
      }
    }
} );

//================
//LIKES SUB ROUTES
//================

app.get( "*", function( req, res ) {
  res.send( "404 page not found" );
} );

// Tells express to listen for requests (Start server)

app.listen( 3001, function() {
  console.log( "The server started on http://localhost:3001/" );
} );