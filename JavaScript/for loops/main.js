console.log( "Print numbers from -10 to 19" );
for ( var i = -10; i <= 19; i++ ) {
    console.log( i )
}


console.log( "Print even numbers between 10 and 40" );
for ( var i = 10; i <= 40; i++ ) {
    if ( i % 2 === 0 ) {
        console.log( i );
    }
}

console.log( "Print odd numbers between 300 and 333" );
for ( var i = 300; i <= 333; i++ ) {
    if ( i % 2 !== 0 ) {
        console.log( i );
    }
}

console.log( "Print numbers divisible by 5 and 3 between 5 and 50" );
for ( var i = 5; i <= 50; i++ ) {
    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log( i );
    }
}

// //this option is more efficient at printing even numbers because it runs less often, however you need to make sure the number given starts from an even postion or it will return incorrect results
// // console.log( "Print even numbers from 10 to 40" );
// // var numbers = 10;
// // while ( numbers <= 40 ) {
// //     console.log( numbers );
// //     numbers += 2;
// // }

// // This option is always correct regarless of starting position, but its not as efficient because it runs more often.
// console.log( "Print even numbers from 10 to 40" );
// var numbers = 10;
// while ( numbers <= 40 ) {
//     if ( numbers % 2 === 0 ) {
//         console.log( numbers );
//     }
//     numbers++;
// }


// console.log( "Print odd numbers from 300 to 333" );
// var numbers = 300;
// while ( numbers <= 333 ) {
//     if ( numbers % 2 !== 0 ) {
//         console.log( numbers );
//     }
//     numbers++;
// }

// console.log( "Print numbers divisible by 5 and 3 betwen 5 and 50" );
// var numbers = 5;
// while ( numbers <= 50 ) {
//     if ( numbers % 3 === 0 && numbers % 5 === 0 ) {
//         console.log( numbers );
//     }
//     numbers++;
// }