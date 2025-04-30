'use strict';
const number = parseInt(prompt('Give a number: '));
let isPrime = true;

if (number === 1) {
  console.log(`${number} is not a prime number.`);
} else if (number > 1) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    document.querySelector(
        '#number').innerHTML = `${number} is a prime number.`;
  } else {
    document.querySelector(
        '#number').innerHTML = `${number} is not a prime number.`;
  }
} else {
  document.querySelector(
      '#number').innerHTML = `${number} is not a prime number.`;
}







