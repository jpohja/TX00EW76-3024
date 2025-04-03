'use strict';
const numberOfRollsStr = prompt("Give the number of dice rolls: ");
const numberOfRolls = parseInt(numberOfRollsStr);
let num;
let nums = []
for (let i = 0; i < numberOfRolls; i++) {
  num = Math.floor(Math.random() * 6) +1;
  nums.push(num);
  console.log(num)
}

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

document.querySelector("#sumOfNums").innerHTML = 'The sum is: ' + sum;


