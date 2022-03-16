// ARRAYS

/**
 *  In this class we will know:
 *  what arrays are
 *  how to manipulate arrays
 * 
 */

/*
  Vetores or Arrays
  
  Kind of list that you can add a lot of values of any types.
  A box inside a box.

*/

// this is how you can declare an array in JS

var arrayExample = ["hello", true, 34.5, [true, false, false]];
console.log(arrayExample[3]);

//We can manipulate arrays through methods

//You'll learn a lot of methods to manipulate arrays in your path, but now let's stick with some of them:

/*
  forEach() - itera um array;
  
  push() - adiciona item no final do array;
  pop() - remove item no final do array;
  
  shift() - remove item no início do array;
  unshift() - adiciona item no início do array;
  
  indexOf() - retorna o índice de um valor;

  splice() - remove ou substitui um item pelo índice;
  slice() - retorna uma parte de um array existente;
*/

//forEach()

arrayExample.forEach(function(item){console.log("This is " + item)});
//it'll print 
/*
This is hello
This is true
This is 34.5
This is true,false,false
*/

//push()
arrayExample.push("forbidden");
//arrayExample is ['hello', true, 34.5, Array(3), 'forbidden'] now

//pop()
arrayExample.pop();
//arrayExample is ['hello', true, 34.5, Array(3)] now

//shift()
arrayExample.shift();
//arrayExample is [true, 34.5, Array(3)] now

//unshift()
arrayExample.unshift("belê?");
//arrayExample is ["belê?", true, 34.5, Array(3)] now

//indexOf()
arrayExample.indexOf(34.5);
//2 (index 2)

//splice()
arrayExample.splice(0, 2);
//REMEMBER: first the index you want to start, then the length number (it's not the index) you want

//slice()
arrayExample.slice(0, 1);
//REMEMBER: first the index you want to start, then the length number (it's not the index) you want
