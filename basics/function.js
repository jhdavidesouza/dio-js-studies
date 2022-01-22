//functions
// they are instructions that you create just once
// so you can use it more than once inside your program

    // it's always good to write a name for your function
function sayHello(firstName, lastName){//arguments that receive the values when you call the function
    console.log("Hello, " + firstName + " " + lastName);//says hello with the arguments
    return 0;//is it necessary?
}

sayHello("Jhonatas", "de Souza");//calling the function with these values