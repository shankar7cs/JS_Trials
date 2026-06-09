//hoisting -> default behaviour of JS
console.log(number)
var number=10  //var number+number=10

/* internally 
var number
console.log(number)
number=10
*/

/*console.log(number1)
let number1=20 */  //cannot be hoisted in let keyword //
//TDZ= time period between the variable declaration and value assigned to it

// scoping-visibility or accessibility of the variable

/* global scope - can be declared anywhere in the script but outside the block
   block scoped- variable is declared within the block {}
   function scoped- variable declared with in the function  */

/* if (true){
console.log("condition 1 is executed");

}else if(true){
console.log("condition 2 is executed")
}else {
 console.log("condition 2 is executed")
} */


 //let and const are block scoped variables
 // var is function scoped variable
 

function scp(){

 if(true){
var browser="chrome"
console.log("printing chrome browser inside the block",browser)

 }
 console.log("printing chrome browser outside the block",browser)
}
console.log("printing chrome browser outside the function block",browser)
scp()