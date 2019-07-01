"strict"
/**
 * `An array of key value pairs for CPU types`
 * @type {Array}
 */

const cpus = [ {
    type: "CoreI3",
    brand: "Intel"
  },
  {
    type: "Ryzen 7",
    brand: "AMD"
  },
  {
    type: "Althon 2200ge",
    brand: "AMD"
  },
  {
    type: "Xeon",
    brand: "Intel"
  },
  {
    type: "Phenom",
    brand: "AMD"
  },
  {
    type: "Core2Duo",
    brand: "Intel"
  },
  {
    type: "Core2Quad",
    brand: "Intel"
  }
]

/**
 * The games score
 * @type {Number}
 */

let score = 0;

/**
 * Prompts the user to answer questions based on the contents of the CPUs const
 * @method
 * @param  {[type]} cpu key value pairs of cpu types and brands
 * @return {[type]}     [description]
 */

//Steps through each value the dictonary asking a question of each
cpus.forEach( function( cpu ) {
  let answer = prompt( "What brand created " + cpu.type + "?" )
  //If the user cancels then thank for playing
  if ( answer == null || answer == "" ) {
    alert( "Thanks for playing" );
    //If they answer check to see if they are correct or not. Display result and score, update score if correct
  } else {
    if ( answer == cpu.brand ) {
      score = score + 1;
      alert( "Correct, your score is " + score );
    } else {
      alert( "Incorrect, your score is " + score );
    }
  }
} );