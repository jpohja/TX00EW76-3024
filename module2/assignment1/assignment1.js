'use strict';

let numberStr;
const numbers = []

for (let i = 0; i < 5; i++) {
  numberStr = prompt("Give a number: ");
  numbers.push(numberStr);
  console.log(numbers.sort((a,b) => b-a));
}
