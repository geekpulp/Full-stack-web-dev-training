"use strict"

const express = require( "express" ),
  app = express(),
  bodyParser = require( 'body-parser' ),
  mongoose = require( "mongoose" ),
  passport = require( "passport" ),
  LocalStrategy = require( "passport-local" ),
  Campground = require( "./models/campground" ),
  Comment = require( "./models/comment" ),
  User = require( "./models/user" ),
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
app.use( express.static( __dirname + "/public" ) );
seedDB();

// ============================================================================
// Passport configuration
// ============================================================================

app.use( require( "express-session" )( {
  secret: "This will be amazing if we let it be",
  resave: false,
  saveUnitialized: false
} ) );
app.use( passport.initialize() );
app.use( passport.session() );
passport.use( new LocalStrategy( User.authenticate() ) );
passport.serializeUser( User.serializeUser() );
passport.deserializeUser( User.deserializeUser() );

// ============================================================================
// Routes
// ============================================================================


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

// ============================================================================
// Comment routes
// ============================================================================

app.get( "/campgrounds/:id/comments/new", function( req, res ) {
  Campground.findById( req.params.id,
    function( error, campground ) {
      if ( error ) {
        console.log( error );
      } else {
        res.render( "comments/new", {
          campground: campground
        } );
      }
    } );
} );

app.post( "/campgrounds/:id/comments", function( req, res ) {
  Campground.findById( req.params.id,
    function( error, campground ) {
      if ( error ) {
        console.log( error );
        res.redirect( "/campgrounds/:id/" );
      } else {
        Comment.create( req.body.comment, function( error, comment ) {
          if ( error ) {
            console.log( error );
          } else {
            campground.comments.push( comment );
            campground.save();
            res.redirect( "/campgrounds/" + campground._id );
          }
        } );
      }
    } );
} );

// ============================================================================
// Auth routes
// ============================================================================

//show reg form
app.get( "/register", function( req, res ) {
  res.render( "register" );
} );

//handel sign up
app.post( "/register", function( req, res ) {
  var newUser = new User( {
    username: req.body.username
  } );
  User.register( newUser, req.body.password, function( err, user ) {
    if ( err ) {
      console.log( err );
      return res.render( "register" );
    }
    passport.authenticate( "local" )( req, res, function() {
      res.redirect( "/campgrounds" );
    } );
  } );
} );

// show login form

app.get( "/login", function( req, res ) {
  res.render( "login" );
} );

// ============================================================================
// Catch all routes
// ============================================================================

app.get( "*", function( req, res ) {
  res.send( "404 page not found" );
} );

// Tells express to listen for requests (Start server)

app.listen( 3001, function() {
  console.log( "The server started on http://localhost:3001/" );
} );