"use strict"

//install these using "npm i express mongoose body-parser"
const bodyParser = require( "body-parser" ),
  mongoose = require( "mongoose" ),
  express = require( "express" ),
  passport = require( "passport" ),
  localStrategy = require( "passport-local" ),
  passportLocalMongoose = require( "passport-local-mongoose" ),
  User = require( "./models/user" ),
  app = express();

mongoose.connect( "mongodb://localhost/authDemo", {
  useNewUrlParser: true
} );

app.set( "view engine", "ejs" );

app.use( bodyParser.urlencoded( {
  extended: true
} ) );
app.use( require( "express-session" )( {
  secret: "Emma and Alex are the best kids in all the world",
  resave: false,
  saveUninitialized: false
} ) );
app.use( express.static( "public" ) );
app.use( bodyParser.urlencoded( {
  extended: true
} ) );
app.use( passport.initialize() );
app.use( passport.session() );

passport.serializeUser( User.serializeUser() );
passport.deserializeUser( User.deserializeUser() );

// =====================
// ROUTES
// =====================

app.get( "/", function( req, res ) {
  res.render( "home" );
} );

app.get( "/secret", function( req, res ) {
  res.render( "secret" );
} );

// =====================
// Autentication routes
// =====================

app.get( "/register", function( req, res ) {
  res.render( "register" );
} );

app.post( "/register", function( req, res ) {
  req.body.username
  req.body.password
  User.register( new User( {
    username: req.body.username
  } ), req.body.password, function( err, user ) {
    if ( err ) {
      console.log( err );
      return res.render( "register" );
    } else {
      passport.authenticate( "local" )( req, res, function() {
        res.redirect( "/secret" );
      } );
    }
  } );
} );

app.get( "*", function( req, res ) {
  res.send( "404 page not found" );
} )

// Tells express to listen for requests (Start server)

app.listen( 3011, function() {
  console.log( "The server started on http://localhost:3011/" );
} );