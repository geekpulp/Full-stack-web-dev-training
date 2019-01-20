# JavaScript Methods

## Basics

A method is simply a function thats a property of an object. So a good example might be a person object that has a method to calculate a persons age from their date of birth.

```js
	var person = {
		name: "Emma",
		dob: 2011-04-11,
		age: function(this.dob){
			return Date.now - dob;
		},
		location: "Palmerston North"
	};
```

To call the age method you must specify the object name first, like this:

```js
	person.age(2011-04-11);
```

## Name spacing

One of the main benefits of methods is it allows us to keep our code easy to understand and organised. The concept of name spaces really help with this.

Without a name space if we created a speak function for dogs:

```js
	function speak() {
		return "WOOF!";
	}
```

and later in our code we then create a speak function for cats:

```js
	function speak() {
		return "MEOW!";
	}
```

we get what’s called a name space collision. This means that if now call speak I get “MEOW!” and never “WOOF!”.

To avoid this we use a name space, which is really just an empty object to house our function within its own space. So to fix the above example we would:

```js
	var dogSpace = {};
	dogSpace.speak = function() {
		return "WOOF!";
	}
	var catSpace = {}
	catSpace.speak = function() {
		return "MEOW!";
	}

	dogSpace.speak(); // this will return WOOF!
	catSpace.speak(); // this will return MEOW!
```

## “this”

The “this” keyword apparently can be a very complicated/advanced part of JavaScript. A basic use for it applies to methods. Using “this” allows us to have a method refer to data in its own object. To use an example from earlier:

```js
	var person = {
		name: "Emma",
		dob: 2011-04-11,
		age: function(this.dob){
			return Date.now - dob;
		},
		location: "Palmerston North",
		friends: ["Ella", "Megan", "Tom"]
	};
```

So we have our person object. Now if we want a method that prints out the contents of the friends property, that’s when we use the “this” keyword:

```js
	person.printFriends = function() {
		this.friends.forEach(function(friend) {
			console.log(friend);
		});
	}
```

So now we can use the method to print friends on a person object like this:

```js
	person.printFriends();
```

#dev/js
