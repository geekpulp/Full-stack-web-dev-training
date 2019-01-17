# JavaScript Objects

## Basics

Every item in an object is a key value pair.

Here's an example:

    var person = {
        name: "Emma",
        Age: 7,
        city: "Palmerston North"
    }

## Retrieve data

## Different syntax

To retrieve data from an object there are two ways of doing it:

    console.log(person["name"]);

or

    console.log(person.name);

## Numbers for names of key value pairs

Personally I prefer the dot notation (the second option). One issue is that dot notation doesn't work if the items name contains a number. For example:

    someObject.1thing //Invalid

But

    someObject["1thing"] //Valid

To work around this just make it best practice not to use numbers for the names of key value pairs.

## Spaces in names

Spaces can be used in the naming of a key value pair, but similar to numbers in the names, this is not recommended.

If there is a space in a name for some reason (like its someone else code you're working on) then you have to retrieve the data using bracket notation, not dot notation.

## lookup using a variable

If you want to use a variable to lookup an object you must use bracket notation. For example

    var str = "name";
    someObject.str // this doesn't look for "name"
    someObject.[str] // this will use the variable and look for "name"

## Update data