//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 

let myName = "An"
// console.log(`my name is ${myName}`);
// console.log(typeof myName);
// I use "let" to create a local variable that might change later. I also use console.log() to make sure the myName variable correctly saves my first name as a string.

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE

let faveNum = 3
// console.log(`my favorite number is ${faveNum}`);
// console.log(typeof faveNum);
// I use "let" to create a local variable that might change later. I also use console.log() to make sure the faveNum variable correctly saves my favorite number as a number data type.

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE

let lovesCode = true
// console.log(`It is ${lovesCode} that I love to code!`);
// console.log(typeof lovesCode);
// I use "let" to create a local variable that might change later. I also use console.log() to make sure the lovesCode variable correctly saves a boolean data type.

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE

if (faveNum === 13) {
  console.log('lucky 13!');
} else {
  console.log('not lucky 13.');
}

// In javascript, if-statement is in the form: if (argument) {code block to execute if true}. I use === to check for equality, if faveNum is equal to 13.

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE

for (let i = 0; i <5; i++) {
  console.log(faveNum);
}

// In javascript, for-loop is in the form:
// for ( let iterator = number; condition to run iterator as long as it is true; increment of iterator)
// In this problem, i starts at 0 and increment by 1 as long as i is less than 5. i++ means I'm incrementing i by 1 in each loop.

