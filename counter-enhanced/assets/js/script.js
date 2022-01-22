var currentNumberHTML = document.getElementById('currentNumber');//we want to change the content inside the HTML tag
var currentNumber = 0; //initiating the same way inside the HTML content
/* this is how you call addEventListener */
var decrementButton = document.getElementById('decrementButton');//classifying the variables with the elements IDs
var incrementButton = document.getElementById('incrementButton');

//adding addEventListener method to the classified variables
incrementButton.addEventListener('click', () => {//function to increase the number by 1
    currentNumber++; //incrementer
    currentNumberHTML.innerHTML = currentNumber;//the HTML element gets the value of currentNumber and assign it into itself
});

decrementButton.addEventListener( 'click', () => { //function to decrease the number by 1
    currentNumber--; //decrementer
    currentNumberHTML.innerHTML = currentNumber; //the HTML element gets the value of currentNumber and assign it into itself
});
