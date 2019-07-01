< script >
  /*This function will create the Quiz at a hopefully exellence level. */

  function Quiz() {
    /*These store the different CPUs and Brands stored in the system. */
    var CPU = [ "CoreI3", "Ryzen 7", "Althon 2200ge", "Xeon", "Phenom", "Core2Duo", "Core2Quad" ]
    var Brand = [ "Intel", "AMD", "AMD", "Intel", "AMD", "Intel", "Intel" ]
    /*This variable keeps the score at 0 at the start of the game and stores the score in the system. */
    var score = 0;
    /*This is the foor loop that will fo through the Cpu and Brands in order. */
    for ( var i = 0; i < CPU.length; i++ ) {
      /*This prompts the user and answeres then a question about the CPU and the user can then answer the question. */
      var answer = prompt( "What brand created " + CPU[ i ] + "?" )
      /*This while loop telles the user that the answer has to be within 2 and 8 charactors long and then continues the code if they get it correct again. */
      while ( letterLimit( answer ) == false ) {
        answer = prompt( "Your answer has to be within 2 and 8 letters long" )
        /*This will allow the user to quit out while they are in the while loop by pressing the cancel button with a lovely message. */
        if ( answer == null ) {
          alert( "Later dude" )
        }
      }
      /*This will quit out of the quiz with a lovely message when the player presses the cancel button when they are outside of the while loop. */
      if ( quit( answer ) ) {
        return
      }
      /*This will determan if its correct or incorrect \/ */
      else if ( Brand[ i ].toLowerCase() == answer.toLowerCase() ) {
        alert( "Correct" )
        /*This adds 1 to the score after a question is asnwered right. */
        score++
      } else {
        alert( "Incorrect" )
        alert( "Your answer should of been " + Brand[ i ] )
      }
      alert( "You have " + score + " out of " + Brand.length );
    }
  } /*This will determan if its correct or incorrect /\ */

/*This function lets the user quits with a message. */
function quit( answer ) {
  if ( answer == null ) {
    alert( "Thanks for giving it a go!!" )
    return
  }
}
/*This function creates the charactor limit for their answers. */
function letterLimit( answer ) {
  if ( answer.length < 2 || answer.length > 8 ) {
    return false
  }
} <
/script>