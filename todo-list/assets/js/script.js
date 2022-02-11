let addButton = document.getElementById("add-task-button").addEventListener("click", addTask);
let addLabel = document.getElementById("task-input");


function addTask(){
    let newLabel = document.createElement("label");
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "checkbox");

    let toDoList = document.getElementById("todo-list");
    toDoList.appendChild(newInput);
}
