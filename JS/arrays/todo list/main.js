var todos = [];

var input = prompt( "What would you like to do? new, list, delete, or quit?" );

while ( input !== "quit" ) { // if the user asks to quit, drop out of the loop
    if ( input === "list" ) { // if the user asks to list todo items
        listTodos();
    } else if ( input === "new" ) { // if the user asks to add a new item
        newTodo();
    } else if ( input === "delete" ) {
        deleteTodo();
    }
    var input = prompt( "What would you like to do? new, list, delete, or quit?" ); // ask the user what's next
}
console.log( "You've quit the app" ); // inform the user they have quit the app


// Functions

function listTodos() { // lists all the current todo list
    console.log( "**********" );
    todos.forEach( function ( todoItem, i ) { // for each item in the array
        console.log( i + ": " + todoItem ); // output the contents to the todo array
    } )
    console.log( "**********" );
}

function newTodo() { // adds a new item to the todo list
    todos.push( prompt( "Enter new todo" ) ); // add it to the array
    console.log( "Item added" )
}

function deleteTodo() { // deletes an items from the todo list
    todos.splice( prompt( "Which index do you want to delete?" ), 1 );
    console.log( "Item deleted" );
}