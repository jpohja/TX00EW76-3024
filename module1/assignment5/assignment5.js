'use strict';
const yearStr = prompt("Enter a year: ")
//confirm("Continue")
const year = parseInt(yearStr);
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  document.querySelector('#year').innerHTML = 'Leap year';
} else {
  document.querySelector('#year').innerHTML = 'Not a leap year';
}


