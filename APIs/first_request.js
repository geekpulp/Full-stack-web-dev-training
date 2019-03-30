"use strict"
const request = require( "request" );

request( "https://jsonplaceholder.typicode.com/users/1", function( error, response, body ) {
  if ( !error && response.statusCode == 200 ) {
    const parsedUserData = JSON.parse( body );
    console.log( parsedUserData.name );
  }
} );