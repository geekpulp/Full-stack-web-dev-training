# JavaScript DOM
This works in a similar way to CSS in that it’s really two parts, select and manipulate.

## Select
selecting page elements in the DOM is don’t via a number of methods included in the DOM. here are a few examples:

Use document.getElementByID to select an HTML element by an ID

```js
var tag = document.getElementById( "highlight" );
```

Use document.getElementByClassName to select a HTML elements by class

```js
var tags = document.getElementsByClassName("bolded");
```

Use document.getElementsByTagName to select HTML elements by their tag

```js
var moreTags = document.getElementByTagName( "li" );
```

document.querySelector is a newer method that really makes life much easier. It allows you to select the first element of a given CSS style selector. It’s important to remember this will only return the very first instance of an element. Here’s an example:

```js
var firstBolded = document.querySelector( ".bolded" );
```

document.querySelectorAll is just like document.querySelector except 1 important difference, it selects all elements of the type specified. Here’s an example of its usage:

```js
var allBolded = document.querySelectorAll( ".bolded" );
```

As you can see there are many ways to select elements, there are also may different ways to select the same elements. Here’s an example:

First here’s the HTML we are working with
```HTML
<!DOCTYPE html>
<html>
<head>
	<title>My title</title>
</head>
<body>
	<h1>I am an h1!</h1>
	<p id="first" class="special">Hello</p>
	<p class="special">Goodbye</p>
	<p>Hi Again</p>
	<p id="last">Goodbye Again</p>
</body>
</html>
```

and here are 5 examples of selecting the first p tag

```js
document.getElementById( "first" );
document.getElementByClass( "special" )[ 0 ];
document.getElementByTagName( "p" )[ 0 ];
document.querySelector( "p" );
document.querySelector( ".special" );
document.querySelectorAll( "#first" );
```

## Manipulate
### The Basics

To manipulate the DOM we use change its various properties to effect the HTML and CSS on the page. For example:

```js
//first select the element for manipulation
var tag = document.getElementByID( "Highlight" );

//next change the style properties to effect the selected element
tag.style.color = "blue";
tag.style.marginTop = "200px";
```

To view all of the available properties just use the same approach as you would for any other JavaScript object and call it from the console like this:

```js
//to show the properties for our tag variable
tag.style

//or you can show the propeties of any particular page element like the p tag
p.style
```

### textContent

This JavaScript functions returns the text content of a given HTML element. For example:

```html
<p>
  This is an <strong>awesome</strong> paragraph
</p>
```

```js
//select the <p> tag
var tag = document.querySelector("p");

//Retrieve the text content
tag.textContent; // This will contain "This is an awesome paragraph"

// alter the text content
tag.textContent = "Blah blah blah";
```

An important thing to note about textContent is that it will remove all HTML tags within the text content. So in the above example the strong tags will be removed when the content is replaced by “Blah blah blah”.

To get around this we would use a different function call “innerHTML” like this

```html
<p>
  This is an <strong>awesome</strong> paragraph
</p>
```

```js
//select the <p> tag
var tag = document.querySelector("p");

//Retrieve the text content
tag.innerHTML; // This will contain "This is an <strong>awesome</strong> paragraph"

//Alter the text content
tag.innerHTML = "Blah <strong>blah</strong> blah blah";
// This will output blah blah blah and correctly render the HTML tags. This a key difference between the textContent and innerHTML functions

```

It’s important to note that for this to work you need to make sure the JavaScript runs after the HTML has loaded.

## The separation of concerns
It’s important to note at this stage with HTML, CSS and JavaScript there is the concept of separation of concerns with these three languages. Each one plays a role in web development and it pays to remind ourselves what these roles are:

1. HTML = Structure
2. CSS = Presentation
3. JavaScript = Behaviour

There is some overlap between them, but this should be minimised wherever possible.

![](JavaScript%20DOM/Screen%20Shot%202019-01-24%20at%207.07.04%20AM.png)

A good example is while JavaScript can effect individual CSS styles it’s better practice to define classes in your CSS files and calling those classes from JavaScript.

#dev/js

