function sing() {
    console.log( "tiwnkle twinkle..." );
    console.log( "how I wonder..." );
}

// setInterval is an example of a higher order function.
// We are sending a function "sing" to setInterval which will then run sing every 1000 milliseconds
setInterval( sing, 1000 );