"use strict"

function average( numbers ) {
  let total = 0;
  for ( let i = 0; i < numbers.length; i++ ) {
    total += numbers[ i ];
    // console.log( i );
    // console.log( numbers.length );
    // console.log( total );
  }
  // console.log( numbers.length );
  // console.log( total );
  return Math.round( total / numbers.length );
};

const scores = [ 90, 98, 89, 100, 100, 86, 94 ];
console.log( average( scores ) );

const scores2 = [ 40, 65, 77, 82, 80, 54, 73, 63, 95, 49 ];
console.log( average( scores2 ) );