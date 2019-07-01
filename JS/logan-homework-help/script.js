"strict"

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

let score = 0;


cpus.forEach( function( cpu ) {
  let answerOption = Math.random();
  let answer = prompt( "What brand created " + cpu.type + "?" )
  if ( answer == null || answer == "" ) {
    alert( "Thanks for playing" );
  } else {
    if ( answer == cpu.brand ) {
      score = score + 1;
      alert( "Correct, your score is " + score );
    } else {
      alert( "Incorrect, your score is " + score );
    }
  }
} );