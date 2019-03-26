var request = require( "request" );
request( "http://www.geekpulp.co.nz", function( error, response, body ) {
  if ( error ) {
    console.log( "Yikes!" );
    console.log( error );
  } else {
    if ( response.statusCode === 200 ) {
      console.log( body );
    }
  }
} );