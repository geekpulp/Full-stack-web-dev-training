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
