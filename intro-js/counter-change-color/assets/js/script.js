var currentNumberHTML = document.getElementById('currentNumber');//we want to change the content inside the HTML tag
currentNumberHTML.style.color = "blue"; //initialize the numbers already in blue
var currentNumber = 0; //initiating the same way inside the HTML content

/* this is how you call addEventListener */

//calling the methods to each element and apply these functions 
var decrementButton = document.getElementById('decrementButton').addEventListener('click', decrease);//classifying the variables with the elements IDs
var incrementButton = document.getElementById('incrementButton').addEventListener('click', increase);;


function increase(){
    currentNumber++;//increasing the value by 1
    currentNumberHTML.innerHTML = currentNumber;
    if(currentNumber >= 0){
        currentNumberHTML.style.color = 'blue';
    }
}

function decrease(){
    currentNumber--;//decreasing the value by 1
    currentNumberHTML.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberHTML.style.color = 'red';
    }
}









