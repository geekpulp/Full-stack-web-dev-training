# JavaScript Objects

## Basics

Every item in an object is a key value pair. They can hold any sort of data.

Here's an example:

    var person = {
        name: "Emma",
        Age: 7,
        city: "Palmerston North"
    }

## Retrieve data

## Different syntax

To retrieve data from an object there are two ways of doing it:

    console.log( person[ "name" ] );

Or

    console.log( person.name );

## Numbers for names of key value pairs

Personally I prefer the dot notation (the second option). One issue is that dot notation doesn't work if the items name contains a number. For example:

    someObject.1thing // Invalid

But

    someObject[ "1thing" ] // Valid

To work around this just make it best practice not to use numbers for the names of key value pairs.

## Spaces in names

Spaces can be used in the naming of a key value pair, but similar to numbers in the names, this is not recommended.

If there is a space in a name for some reason (like its someone else code you're working on) then you have to retrieve the data using bracket notation, not dot notation.

## lookup using a variable

If you want to use a variable to lookup an object you must use bracket notation. For example

    var str = "name";
    someObject.str // this doesn't look for "name"
    someObject.[ str ] // this will use the variable and look for "name"

## Update data

The concept is similar to an array, but rather than using a number to assign to one of the array slots, you use the name in the key value pair. For example:

    var person = {
        name: "Alex",
        age: 5,
        city: "Palmerston North"
    };

    // Add one to age
    person[ "age" ] += 1;
    // update the persons city
    person.city = "Wellington";

## Creating objects

There are three ways to create an object.

### Make and object then add to it

    var person = {}
    person.name = "Anna";
    person.age = 38;
    person.city = "Palmerston North";

### All at once

    var person = {
        name: "Emma",
        age: 7,
        city: "Palmerston North"
    };

### Using a function

    var person = new object();
    person.name = "Alex";
    person.age = 21;
    person.city = "Palmerston North"
