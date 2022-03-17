//for is a loop structure

/*
a loop structure is a structure
that repeats itself until a condition is satisfied
*/

//in for case, when the condition is not true anymore, the loop stops

var counting = 0;

for ( counting; counting <= 10; counting++ ){
    console.log(counting);
}

//let's read that syntax above

/*
        so FOR loops can initialize with a variable (global or local) or not, but always follows 3 processes
        initializer ; condition ; increment/decrement
        
        the actions inside the FOR loop will repeat itself until the condition is NOT TRUE anymore
*/


for ( counting; counting >= 0; counting-- ){
    if ( counting > 0 ){
        console.log("ainda é maior que zero");
    } else if ( counting == 0 ){
        console.log("é zero");
    }
}
console.log("menor que zero");
