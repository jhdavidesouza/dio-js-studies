/*
    We need to know:

    * How JS typing works
    * What variables are
    * How to declare variables
    * Differences among attribution, comparison and identical comparison
    * Arithmetic, relational and logical operators
*/

//TYPING

/* 
    it works as a data usage rule:
        the stronger is the typing,
        more mandatory is the data type declaration
*/

// JS typing

/*
    JavaScript typing is WEAK,
    so data declaration happens dinamically

    For example:

*/

var valor = "valor"; //its data type is String
valor = 1; // now it's number
valor = true; // now it's logical
// all these ways are possible in JavaScript

//PRIMITIVE TYPES
/*
    in JavaScript we have:

    *NULL
    *UNDEFINED
    *BOOLEAN
    *NUMBER
    *STRING
    *ARRAY
    *OBJECT
    *FUNCTION

    Examples:
*/

var booleandVar = true; //booleand type
var numberVar = 35.5; //number type
var stringVar = "string"; //string type

//VARIABLES

/*
    Variables are values that has varied values.
    We can declare them by typing:

    var - global&local escope
            its value can be altered
            it's null if it doesn't have
                an initial value

    let - block local escope
            its value can be altered
                it's null if it doesn't have
                    an initial value

    const - block local escope,
                its value CAN'T be altered
                    MUST HAVE an initial value
                    (read-only)

*/

//ESCOPE

/*
    It defines the limitation and visibility
        within a code block

        GLOBAL ESCOPE - 
            variable is declared out of any block,
            its visibility is available through
            all the code

        LOCAL ESCOPE -
            variable is declared INSIDE a block,
            its visibility can or can't be available.

*/

//VARIABLE USAGE RULES

/*
    1. Don't initiate the variable's name with a Number
        1.1 You can initiate it with:
            * letters
            * underscore (_)
            * currency sign ($)
    2. Don't use spaces
        2.1 Use camelCase (nameOfVariable)
    3. Don't use reserved words (var function, var boolean)
    4. Declare variables at the top of the code block.

*/

// ATTRIBUTION

/*
    We use "=" to attribute values to variables
    For example:
*/

//it reads: variableName gets "attribution" value
var variableName = "attribution";

//COMPARISON

/*
    We use "==" to compare two values
    For example:
*/

//the variable is attributed the value true
    //because it receives the value from the comparison
var areTheyEqual = "9" == 9;//true

//IDENTICAL COMPARISON

/*
    Value and Type are compared here
    We use "===" to compare identically two values
    For example:
*/

var numberOne = 0;
var numberTwo = "0";
//as they don't have the same value type
// the comparison

numberOne === numberTwo; //is false


//ARITHMETIC OPERATORS

/**
    They are:

    * addition +
    * subtraction -
    * multiplication *
    * real division /
    * int division % (REST OF DIVISION)
    * exponentiation **

 */

//RELATIONAL OPERATORS
/**
 * They are
 *  * greater than (>)
 *  * less than     (<)
 *  * greater than or equal to (>=)
 *  * less than or equal to (<=)
 *  * equal to (==)
 *  * not equal to (!=)
 * 
 */

//LOGICAL OPERATORS

/**
    They are:
    * AND (&&)
    * OR (||)
    * NOT (!) - inverts the boolean value
 */