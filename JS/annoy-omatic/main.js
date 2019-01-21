// var answer = "no";

// while ( answer !== "yes" && answer !== "yeah" ) {
//     answer = prompt( "are we there yet?" );
// }

// alert( "Yay we made it!" );

// Version 2
var answer = "no";

// checks to see if yes or yeah is within the string entered
while ( answer.indexOf( "yes" ) === -1 && answer.indexOf( "yeah" ) === -1 ) {
    answer = prompt( "are we there yet?" );
}

alert( "Yay we made it!" );