"strict"

const express = require( "express" ),
  router = express.Router(),
  Campground = require( "../models/campground" );

//INDEX - Restful route shows all campgrounds
router.get( "/", function( req, res ) {
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
router.post( "/", function( req, res ) {
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
router.get( "/new", function( req, res ) {
  res.render( "campgrounds/new" );
} );


//SHOW - Restful route which shows a specific campground
router.get( "/:id", function( req, res ) {
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

module.exports = router;