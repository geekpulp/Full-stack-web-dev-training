"use strict"

//install these NPM packages using "npm i express mongoose body-parser"
const bodyParser = require( "body-parser" ),
  mongoose = require( "mongoose" ),
  express = require( "express" ),
  app = express();

// APP CONFIG
mongoose.connect( "mongodb://localhost/restfulblogengine", {
  useNewUrlParser: true
} );
app.set( "view engine", "ejs" );
app.use( express.static( "public" ) );
app.use( bodyParser.urlencoded( {
  extended: true
} ) );

//MONGOOSE/MODEL CONFIG
const blogSchema = new mongoose.Schema( {
  title: String,
  image: String,
  body: String,
  created: {
    type: Date,
    default: Date.now
  }
} );

const Blog = mongoose.model( "Blog", blogSchema );


//RESTful ROUTES

app.get( "/", function( req, res ) {
  res.redirect( "/blogs" );
} )


//INDEX ROUTE
app.get( "/blogs", function( req, res ) {
  Blog.find( {},
    function( err, blogs ) {
      if ( err ) {
        console.log( err );
      } else {
        res.render( "index", {
          blogs: blogs
        } );
      }
    } );
} );

//NEW ROUTE
app.get( "/blogs/new", function( req, res ) {
  res.render( "new" );
} );

//INDEX ROUTE
app.post( "/blogs", function( req, res ) {
  Blog.create( req.body.blog,
    function( err, newBlog ) {
      if ( err ) {
        res.render( "new" );
      } else {
        res.redirect( "/blogs" );
      }
    } );
} );

app.get( "*", function( req, res ) {
  res.send( "404 page not found" );
} )

// Tells express to listen for requests (Start server)

app.listen( 3010, function() {
  console.log( "The server started on http://localhost:3010/" );
} );