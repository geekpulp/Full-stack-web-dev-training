# JavaScript DOM events
## Examples of events
- Clicking a button
- Hover over a link
- Dragging and dropping
- Pressing the enter key

## The process
First we select and element then we add an event listener.  To add an event listener we use the “addEventListener” function like this:

```js
// here's the listener syntax
Element.addEventListener( type, functionToCall ) ;
```

```js
// first select the element
var button = document.querySelector( "button" );
// then add the listener
button.addEventListener( "click", function() {
  console.log( "SOMEONE CLICKED A BUTTON!" );
} );
```

Multiple event listeners can be added to the same element. This will cause multiple actions to take place in the order the listeners are added. 

A common pattern is to add event listeners to a set of elements, like each item in a list so each item is clickable. The code for this would look like this:

```js
var listItems = document.querySelectorAll( "li" );
for ( var i = 0; i < listItems.length; i++ ) {
    listItems[ i ].addEventListener( "click", function () {
        this.style.color = "pink";
    } );
}
```

#dev/js