const query = document.querySelector('#query');
const form = document.querySelector('#form');

form.onsubmit = event => {
    event.value += '?q=' + query.value;
}