//switch is another conditional decision structure

//it has a different syntax

switch ( expression ) {
    case EXPRESSION :
        action;
        break;
    case OTHER EXPRESSION :
        action;
        break;
    default IN CASE NO EXPRESSIONS ARE TRUE :
        action;
}

//for example

var choice = 1;

switch (choice){
    case 1 :
        console.log("It's 1");
        break;
    case 2 :
        console.log("It's 2");
        break;
    default :
        console.log("It's neither 2 nor 1");
}
