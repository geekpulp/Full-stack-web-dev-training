// prints an array to the console in reverse order
function printReverse( numArray ) {
    console.log( "Print array in reverse order" );
    console.log( "****************************" );
    for ( var i = numArray.length - 1; i >= 0; i-- ) {
        console.log( numArray[ i ] );
    }
    console.log( "****************************" );
}

var myArray = [ 5, 7, 38, 38 ];
//call the function
printReverse( myArray );


// function that returns true if every element of the array is the same
function isUniform( numArray ) {
    var firstItem = numArray[ 0 ];
    console.log( "Is the array uniform?" );
    console.log( "****************************" );
    for ( var i = 1; i < numArray.length; i++ ) {
        if ( firstItem !== numArray[ i ] ) {
            console.log( "False, " + firstItem + " does not equal " + numArray[ i ] );
            console.log( "****************************" );
            return false;
        }
    };
    console.log( "True" );
    console.log( "****************************" );
    return true;
}

var myArray = [ 5, 7, 38, 38 ];
isUniform( myArray );

// adds all the items in an array together to produce the sum
function sumArray( numArray ) {
    var sum = 0;
    numArray.forEach( function ( item ) {
        sum = sum + item;
    } );
    console.log( "What's the sum of the Array?" );
    console.log( "****************************" );
    console.log( "The sum of the Array is: " + sum );
    console.log( "****************************" );
}

var myArray = [ 5, 7, 38, 38 ];
sumArray( myArray );


// What's the highest number in the array
function maxArray( numArray ) {
    var max = numArray[ 0 ];
    numArray.forEach( function ( item ) {
        if ( max < item ) {
            max = item;
        }
    } );
    console.log( "What's the biggest number in the Array" );
    console.log( "****************************" );
    console.log( "The biggest number is: " + max );
    console.log( "****************************" );
}

var myArray = [ 5, 7, 38, 38 ];
maxArray( myArray );