var currentNumberHTML = document.getElementById('currentNumber');//we want to change the content inside the HTML tag
var currentNumber = 0; //initiating the same way inside the HTML content

function increment(){//function to increase the number by 1
    currentNumber++; //incrementer
    currentNumberHTML.innerHTML = currentNumber;//the HTML element gets the value of currentNumber and assign it into itself
}

function decrement(){ //function to decrease the number by 1
    currentNumber--; //decrementer
    currentNumberHTML.innerHTML = currentNumber; //the HTML element gets the value of currentNumber and assign it into itself
}
