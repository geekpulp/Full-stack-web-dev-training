// function isEven( num ) {
//     if ( num % 2 === 0 ) {
//         return true;
//     }
//     return false;
// }

function isEven( num ) {
    return num % 2 === 0;
}

function factorial( num ) {
    var result = 1;

    for ( var i = 2; i <= num; i++ ) {
        result = result * i;
    }
    return result;
}