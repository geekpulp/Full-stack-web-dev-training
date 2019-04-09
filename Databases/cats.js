var mongoose = require( "mongoose" );
mongoose.connect( 'mongodb://localhost/cat-app', {
  useNewUrlParser: true
} );

var catSchema = new mongoose.Schema( {
  name: String,
  age: Number,
  temerament: String
} );

var Cat = mongoose.model( "Cat", catSchema );

// Adding a new cat to the DB

// retrieve all cats formt he DB and consle.log each one