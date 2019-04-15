var mongoose = require( "mongoose" );
mongoose.connect( 'mongodb://localhost/cat-app', {
  useNewUrlParser: true
} );

var catSchema = new mongoose.Schema( {
  name: String,
  age: Number,
  temperament: String
} );

let Cat = mongoose.model( "Cat", catSchema );

// Adding a new cat to the DB

// let newCat = new Cat( {
//   name: "Mrs. Norris",
//   age: 311,
//   temperament: "Evil"
// } );
//
// newCat.save( function( err, cat ) {
//   if ( err ) {
//     console.log( "Yikes something went wrong" );
//   } else {
//     console.log( "We saved a cat" );
//     console.log( cat );
//   }
// } );

Cat.create( {
  name: "Snow White",
  age: 15,
  temperament: "Bland"
}, function( err, cat ) {
  if ( err ) {
    console.log( err );
  } else {
    console.log( cat );
  }
} );


// retrieve all cats formt he DB and consle.log each one

Cat.find( {}, function( err, cats ) {
  if ( err ) {
    console.log( "Danger Glen Young, Danger" );
    console.log( err );
  } else {
    console.log( "All of the cats all of the time" )
    console.log( cats );
  }
} );