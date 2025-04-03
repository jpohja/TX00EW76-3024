'use strict';

const name = prompt("Give a student's name: ");

const classNum = Math.floor(Math.random() * 4) + 1;

switch (classNum) {
  case 1:
    document.querySelector('#sorted').innerHTML = name + ", you are Ravenclaw.";
    break;
  case 2:
    document.querySelector('#sorted').innerHTML = name + ", you are Gryffindor.";
    break;
  case 3:
    document.querySelector('#sorted').innerHTML = name + ", you are Slytherin.";
  break;
  case 4:
    document.querySelector('#sorted').innerHTML = name + ", you are Hufflepuff.";
  default:
    document.querySelector('#sorted').innerHTML = "Something went wrong. Try again.";
}

