const referenceList = document.getElementById("todo-list");//creating a variable that gets the reference from which we will append the recently created elements above
const ourForm = document.getElementById("form");

ourForm.onsubmit = function (x){
    x.preventDefault(); //search more about this method
    const inputUserWritesInside = document.getElementById("task-input");
    addTask(inputUserWritesInside.value);
    form.reset(); //search more about this method and why does it help the solution make it work

}

function addTask(writtenText){//function created to add a task

    //then, we need to create an input 'checkbox' and a label
    const newInput = document.createElement("input");//here we create a new input element
    //now, let's set the attribute of this element, so it can be a type checkbox input
    newInput.setAttribute("type", "checkbox");//setting the type
    newInput.setAttribute("id", writtenText);//setting the ID that will help us with the label
    newInput.setAttribute("name", writtenText);//setting the NAME attribute that will help us with the label

    const newLabel = document.createElement("label");//creating a new label element
    newLabel.setAttribute("for", writtenText);//setting the attribute for, so it can be directly related to its input element
    newLabel.appendChild(document.createTextNode(writtenText));//the text inside the HTML label tag will be the same thing the user wrote inside the text type input

    //to wrap it all we need a div that serves us to put the new Input and the new Label created inside
    const newContainer = document.createElement("div");
    newContainer.classList.add("task-item");
    newContainer.appendChild(newInput);
    newContainer.appendChild(newLabel);

    referenceList.appendChild(newContainer);//inserting the new container into the list

}

//it works... finally
