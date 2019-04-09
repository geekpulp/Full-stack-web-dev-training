var mongoose = require( "mongoose" );
mongoose.connect( 'mongodb://localhost:27017/cat-app', {
  useNewUrlParser: true
} );
// Adding a new cat to the DB