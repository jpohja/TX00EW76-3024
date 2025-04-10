'use strict';
let number;
const numbers = []

do {
  number = parseInt(prompt("Give a number: "))
  numbers.push(number);
  numbers.sort((a, b) => b-a);
}
while (number !== 0);

console.log(numbers);
document.querySelector('#zero').innerHTML = numbers;