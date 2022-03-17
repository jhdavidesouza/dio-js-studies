//OBJECTS

/*
    In this class we will know:
    * what objects are
    * how to unravel objects
*/

//Objects are data that have values and properties
// you declare an object in JS as below:

var dog = {
    size: "big",
    color: "black",
    behavior: console.log("woof woof!")
};

// So the object "dog" has 3 properties --> size, color and behavior
//These properties have their own values

/*
    Each object can be manipulated by
    attributing the value of its properties to a variable
*/

//Like this

var puppy = dog.color;

//we can do what we call destructuring of an object
//doing this:

var {size, color} = dog;
