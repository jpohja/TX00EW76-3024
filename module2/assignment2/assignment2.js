'use strict';
const user_amountStr = prompt("Give the number of participants: ");
const user_amount = parseInt(user_amountStr);

const names = []

for (let i = 0; i < user_amount; i++) {
  name = prompt("Give the name of the participant: ");
  names.push(name);
  names.sort();
  console.log(names);
}

const orderedList = document.createElement('ol');
for (const name of names) {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  orderedList.appendChild(listItem);
}

document.querySelector('#names').appendChild(orderedList);