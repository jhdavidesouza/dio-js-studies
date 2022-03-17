// IF structure is a consitional decision making structure

//something will happen IF another thing has happened

var value = 9;

if ( value >= 10 ){
    console.log("Value is over or equal to 10");
} else { //another action will happen if the first condition is not true
    console.log("Value is lower than 10");
}

//there's the possibility of having more than 1 condition

if ( value > 10 ){
    console.log("Value is over 10");
} else if ( value == 10 ){
    console.log("Value is 10");
} else {
    console.log("Value is lower than 10");
}

//we can nest ifs inside others

if () {
  if () {
  }
}

// there's the ternary operator too, where you can write an if condition in one single line

value > 10 ? value == 10 ? console.log("Value is 10") : console.log("Value is lower than 10");
