# JavaScript Arrays
## Push and Pop
**push** - adds an item to the end of an Array
code looks like this:

```js
	var myArray = [ "Anna", "Alex", "Emma" ];
	myArray.push( "Glen" );
```

In this example myArray will now equal "Anna", "Alex", "Emma", "Glen".

**pop** - returns the last item in an array and removes it from the array
code looks like this:

```js
	var myArray = [ "Anna", "Alex", "Emma", "Glen" ]
	var name = myArray.pop();
```

In this example myArray will now equal "Anna", "Alex", "Emma" and the value "Glen" is stored in the name variable.

## Shift and Unshift
**shift** - removes the first item from an array (it's basically the same as pop but at the other end of the array).

The code looks like this:

```js
	var myArray = [ "Anna", "Alex", "Emma" ];
	var name = myArray.shift();
```

In this example now myArray will equal "Alex", "Emma" and the value removed "Anna" is stored into the name variable.

**unshift** - adds an item to the front of an array (it's basically the same as push but the other end of the array).
The code looks like this:

```js
	var myArray = [ "Alex", "Emma"];
	myArray.unshift("Anna");
```

In this example myArray will now equal "Anna", "Alex", "Emma".

**indexOf** - used to find an item within an array. The code looks like this:

```js 
	var myArray = [ "Anna", "Alex", "Emma" ];
	// This will return 2 as emma is in position 2
	myArray.indexOf( "Emma" );
	// This with return -1 because "Glen" isn't in the array
	myArray.indexOf( "Glen" ); 
```

**slice** - takes items from an array and puts them into a new array. Here's what the code looks like:

```js
	var myArray = [ "Anna", "Alex", "Emma", "Glen" ];
	var kids = myArray.slice( 1,3 );
```

In this example the slice function is used to take the kids from myArray and create a new Array, kids, and populate it with the kids name.

#dev/js