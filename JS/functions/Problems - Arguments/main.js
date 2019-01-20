// function isEven( num ) {
//     if ( num % 2 === 0 ) {
//         return true;
//     }
//     return false;
// }

function isEven( num ) {
    // return true if even
    return num % 2 === 0;
}

// calulate a factorial using a for loop
function factorialFor( num ) {
    // set the result
    var result = 1;
    // calculate the factorial and store the result
    for ( var i = 2; i <= num; i++ ) {
        result = result * i;
    }
    // return the result
    return result;
}

//calulate a facotrial using a while loop
function factorialWhile( num ) {
    // create a varable to store the result
    var result = 1;
    // create varable to store the loop counter
    var count = 1;
    // calulate the factoral of the input   
    while ( count <= num ) {
        result = result * count;
        count++;
    }
    // return the result
    return result;
}

//convert kebab format to snake format
function kebabToSnake( str ) {
    // replace all "-" with "_"
    return str.replace( /-/g, "_" );
}