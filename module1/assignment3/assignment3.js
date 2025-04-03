'use strict';
const num1Str = prompt('Give a number: ');
const num2Str = prompt('Give another number: ');
const num3Str = prompt('Give a third number: ');

const num1 = parseInt(num1Str);
const num2 = parseInt(num2Str);
const num3 = parseInt(num3Str);

let sum = num1 + num2 + num3
let product = num1 * num2 * num3
let average = sum / 3
average = average.toFixed(2)


document.querySelector("#sum").innerHTML = "The sum is: " + sum;
document.querySelector("#product").innerHTML = "The product is: " + product;
document.querySelector("#average").innerHTML = "The average is: " + average;