# Functions

## How to declare a function

### Declare a function

    function doSomething() {
        console.log("Hello World");
    }

### Rerfer to a function

    doSomething;

### Call a function

    doSomething();

### Arguments

    function square(num) {
        console.log(num * num);
    }

    square(10); //prints 100
    square(3); //prints 9
    square(4); //prints 16

### The Return Keyword

Return allows you to capture output of a function.

    function square(num) {
        if(typeof num !== "number") {
            return console.log("That's not a number")
        }
            return num * num;
    }

    square(10); //returns 100
    square(3); //returns 9
    square(4); //returns 16

    var banana = square(142);

Also imporant to remeber return ends the function. so as soon as the return command is it nothing beyond it will run.

### Two ways to declare functions

The first (and it seems to me the normal way) to declare a function is called a Function Declaration and it looks like this:

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

The second way is called Function Expression. This method basically creats a function inside a varable. The main difference is that the express can be overwritten, and the function can be lost. It looks like this:

    var capitalize = function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

So if I was to assign a diffent value to capitalize later the function would be lost like this:

    capatalize = 200;

    capitalize();

So this would now return "Undefined" as the function is gone, having been replaced with a int value of 200.