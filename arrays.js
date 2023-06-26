//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ["red", "green", "black"];

//CODE HERE

let colorCopy = faveColors.slice();
// console.log(colorCopy)
// I'm using "let" to create a copy of faveColors and save it as a new variable "colorCopy". slice(start = optional, end = optional) method is used to make a complete copy of faveColors. Since I'm making a full copy, I don't need to put start and end positions inside of slice().

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

colorCopy.push("pink");
// console.log(colorCopy);

// push() is a method to add a new item to the end of an array. I want to add my favorite color, pink, as a string, so I put it in ''.

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5];

//CODE HERE

let middleNums = numbers.slice(1, 4);
// console.log(middleNums);

// I use slide(start, end not inclusive) method to make a new copy without changing the first variable numberss. To slice (2,3,4), the starting position is 1 and the ending non-inclusive position is 4.

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352];

// CODE HERE

// this creates an empty array
let answers = [];

for (let i = 0; i < bigOrSmallArray.length; i++) {
  if (bigOrSmallArray[i] > 100) {
    answers.push("big");
  } else {
    answers.push("small");
  }
}
console.log(bigOrSmallArray);
console.log(answers);

// I use a for loop to iterate through each number in the bigOrSmallArray and if-else statement to evaluate if each number is > 100 and push "big" to the answers array or if the number is <= 100 and push "small" to answers array. There is only two logic branches, > 100 or <= 100, so I only use if-else. Finally, I console.log both bigOrSmallArray and the answers array to check my work.
