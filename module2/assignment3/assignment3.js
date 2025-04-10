'use strict';
const dogs = []
let dog;

for (let i = 0; i < 6; i++) {
  dog = prompt('Give a name of a dog: ');
  dogs.push(dog);
  dogs.sort();
  dogs.reverse();
}

const unorderedList = document.createElement('ul');
for (const dog of dogs) {
  const listItem = document.createElement('li');
  listItem.textContent = dog;
  unorderedList.appendChild(listItem);
}

document.querySelector('#dogs').appendChild(unorderedList);
