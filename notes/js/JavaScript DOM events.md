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