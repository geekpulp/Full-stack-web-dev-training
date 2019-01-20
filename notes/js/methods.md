# JavaScript Methods

A method is simply a function thats a property of an object. So a good example might be a person object that has a method to calculate a persons age from there date of birth.

    var person = {
        name: "Emma",
        dob: 2011-04-11,
        age: function(dob){
            return Date.now - dob;
        },
        location: "Palmerston North"
    }

To call the age method you must specify the object name first, like this:

    person.age(2011-04-11);