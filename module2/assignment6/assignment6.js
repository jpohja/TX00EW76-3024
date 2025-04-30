'use strict';
let num;
const rolls =  []

function diceRoll() {
  num = Math.floor(Math.random() * 6) +1;
}

do {
  diceRoll()
  rolls.push(num)
}
while (num !== 6);

console.log(rolls)

const unorderedList = document.createElement('ul');
for (const num of rolls) {
  const listItem = document.createElement('li');
  listItem.textContent = num;
  unorderedList.appendChild(listItem);
}

document.querySelector('#rolls').appendChild(unorderedList);