var age = prompt("How old are you kid?");

if (age < 0) {
    console.log("I wasnt born yesterday and you certainly weren't born " + age + " years in the future!")
}

if (age > 0 && Math.sqrt(age) % 1 === 0) {
    console.log(age + "! It's hip to be square" );
}

if (age % 2) {
    console.log(age + "! That's an odd number" );
}

if (age < 18) {
    console.log(age + "! Get back home to yo mama kid, come back in a few years!" );
}
else if  (age < 21) {
    console.log(age + ", right you're in, but you know the rules, no drinkin");
}
else if  (age == 21) {
    console.log(age + " eh, you're in, tell the bar tender the first shots on me")
}
else {
    console.log(age + ", right this way sir, remember drink responsibliy.")
}
