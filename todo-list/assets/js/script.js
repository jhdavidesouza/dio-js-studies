//creating variable that gets button value
let button = document.getElementById("add-task-button");

//calling the method, so when I click on the button
//it'll start the action
button.addEventListener("click", addTask);

function addTask(){//function created to add a task

    //we need to get the text that was written inside 
    //input tag
    let textFromInput = document.getElementById("task-input").value;

    //then, we need to create an input 'checkbox' and a label
    let newInput = document.createElement("input");//here we create a new input element
    //now, let's set the attribute of this element, so it can be a type checkbox input
    newInput.setAttribute("type", "checkbox");//setting the type
    newInput.setAttribute("id", textFromInput);//setting the ID that will help us with the label

    let newLabel = document.createElement("label");//creating a new label element
    newLabel.setAttribute("for", textFromInput);//setting the attribute for, so it can be directly related to its input element
    newLabel.innerHTML = textFromInput;//the text inside the HTML label tag will be the same thing the user wrote inside the text type input

    



}

