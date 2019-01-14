var todos = [];

var input = prompt( "What would you like to do? new, list, or quit?" );

while ( input !== "quit" ) { // if the user asks to quit, drop out of the loop
    if ( input === "list" ) { // if the user asks to list todo items
        console.log( todos ); // output the contents to the todo array
    } else if ( input === "new" ) { // if the user asks to add a new item
        var newTodo = prompt( "Enter new todo" ); // ask them for the item
        todos.push( newTodo ); // add it to the array
    }
    var input = prompt( "What would you like to do? new, list, or quit?" ); // ask the user what's next
}

console.log( "You've quit the app" ); // inform the user they have quit the app