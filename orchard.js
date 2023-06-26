///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// First, I create 3 new variables to find the total acres for each type of aples. Then, I calcalate the total for each type using a for-loop to loop through each element in arrays fujiAcres, galaAcres, and pinkAcres and each array has 7 elements for 7 days in a week. "let" is use to define the 3 new varibles since they will change later after the loops. I use console.log to check the total acres of each apple type, and comment it out when I'm done.

let fujiAcresTotal = 0;
let galaAcresTotal = 0;
let pinkAcresTotal = 0;

for (let i = 0; i < 7; i++) {
  fujiAcresTotal += fujiAcres[i];
  galaAcresTotal += galaAcres[i];
  pinkAcresTotal += pinkAcres[i];
}

totalAcres = fujiAcresTotal + galaAcresTotal + pinkAcresTotal;
// console.log(`fujiAcresTotal =  ${fujiAcresTotal}`);
// console.log(`galaAcresTotal =  ${galaAcresTotal}`);
// console.log(`pinkAcresTotal =  ${pinkAcresTotal}`);
console.log(` totalAcres per week = ${totalAcres}`);

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

// The average daily acres is just the totalAcres divided by 7, the number of days in a week.

let averageDailyAcres = totalAcres / 7;
console.log(` averageDailyAcres = ${averageDailyAcres}`);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE

// I created a while-loop in the format: while (argument to run code if true) {code block}. While acresLeft is above 0, there is still work to be done, so I add one to days variable using the shorthand += 1 and subtract the averageDailyAcres (which is 9 from above) from the acresLeft. This routine will continue while the argument (acresLeft > 0) is true.

while (acresLeft > 0) {
  days += 1;
  acresLeft -= averageDailyAcres;
}

console.log(` Days of work left = ${days}`);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// First I initialize empty arrays for fujiTons, galaTons, and pinkTons so I can use push() method later in the for-loop
let fujiTons = [];
let galaTons = [];
let pinkTons = [];

// Then, I create a for loop to loop through each element of fujiAcres, galaAcres, and pinkAcres array while multiplying each element by 6.5 (which is the acres to ton conversion factor).

for (let i = 0; i < 7; i++) {
  let fujiTonsDaily = 6.5 * fujiAcres[i];
  let galaTonsDaily = 6.5 * galaAcres[i];
  let pinkTonsDaily = 6.5 * pinkAcres[i];
  fujiTons.push(fujiTonsDaily);
  galaTons.push(galaTonsDaily);
  pinkTons.push(pinkTonsDaily);
}

console.log(`fujiTons = ${fujiTons}`);
console.log(`galaTons = ${galaTons}`);
console.log(`pinkTons = ${pinkTons}`);

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

// First, I create 3 new variables fujiPounds, galaPounds, and pinkPounds and assign them a value of 0. To sum the total number of pounds picked for each apple variety, I will use a for-loop, and for each loop iteration, I multiply each element in jufiTons, galaTons, pinkTons by 2000 (tons to pounds conversion factor).

let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

for (let i = 0; i < 7; i++) {
  fujiPounds += fujiTons[i] * 2000;
  galaPounds += galaTons[i] * 2000;
  pinkPounds += pinkTons[i] * 2000;
}

// Then I console.log() the total number of pounds picked for each apple type.

console.log(`fujiPounds = ${fujiPounds}`);
console.log(`galaPounds = ${galaPounds}`);
console.log(`pinkPounds = ${pinkPounds}`);

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// To calculate the profit from selling each apple variety, I multiply the total pounds of each apple type by the price (cents/pount). Then I console.log() to print the prices.

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log(`Total Fuji apples profit $ ${fujiProfit}`);
console.log(`Total Gala apples profit $ ${galaProfit}`);
console.log(`Total Pink apples profit $ ${pinkProfit}`);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

// I use let to initiate a new variable totalProfit. Calculating the total profit is just adding the fujiProfit, galaProfit, and pinkProfit.

let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log(
  `The total profit from selling fuji, gala, and pink apples are $ ${totalProfit}`
);
