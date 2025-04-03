'use strict';
const question = confirm("Should I calculate the square root?");

let numberStr;
let number;
let numberSqrt;

if (question) {
  numberStr = prompt("Give a positive number: ");
  number = parseInt(numberStr)
  if (number >= 0) {
    numberSqrt = Math.sqrt(number)
    document.querySelector('#squareroot').innerHTML = 'The square root of ' + number + ' is ' + numberSqrt.toFixed(2);
  } else {
    document.querySelector("#squareroot").innerHTML = "The square root of a negative number is not defined."
  }
} else {
  document.querySelector("#squareroot").innerHTML = "The square root is not calculated."
}
