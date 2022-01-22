var currentNumberHTML = document.getElementById('currentNumber');//we want to change the content inside the HTML tag
var currentNumber = 0; //initiating the same way inside the HTML content
/* this is how you call addEventListener */
var decrementButton = document.getElementById('decrementButton');//classifying the variables with the elements IDs
var incrementButton = document.getElementById('incrementButton');

//calling the methods to each element and apply these functions 
incrementButton.addEventListener('click', increase);
decrementButton.addEventListener('click', decrease);

function increase(){
    currentNumber++;//increasing the value by 1
    if(currentNumber <= 10){//stops modifying the number, if it's over 10
        currentNumberHTML.innerHTML = currentNumber;
    } else if(currentNumber > 10){//if it's 11, it will turn back into 10 again.
        currentNumber--;
    }
    if(currentNumber >= 0){
        currentNumberHTML.style.color = 'inherit';
    }
}

function decrease(){
    currentNumber--;//decreasing the value by 1
    currentNumberHTML.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberHTML.style.color = 'red';
    }
}









