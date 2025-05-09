'use strict';
const query = document.querySelector('#query');
const form = document.querySelector('#form');
const result_div = document.createElement('div');
document.body.appendChild(result_div);

result_div.id = 'results';

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const input = `https://api.tvmaze.com/search/shows?q=${query.value}`;
    const response = await fetch(input);
    const json = await response.json();
    console.log(json);
    result_div.innerHTML = '';
    console.log(json[0])
    for (const resultKey in json) {
        create_article(json[resultKey]);
    }
});

function create_article(json) {
    console.log('create')
    const article = document.createElement('article');
    const name = document.createElement('h2');
    const link = document.createElement('a')
    link.target = '_blank';
    const image = document.createElement('img');
    const summary = document.createElement('div');

    name.textContent = json.show.name;
    link.href = json.show.url;
    link.textContent = json.show.url.toString();
    image.src = json.show.image ? json.show.image.medium ? json.show.image.medium : "https://placehold.co/210x295?text=Not%20Found" : "https://placehold.co/210x295?text=Not%20Found";
    image.alt = json.show.name;
    summary.innerHTML = json.show.summary;

    article.appendChild(name);
    article.appendChild(link);
    article.appendChild(image);
    article.appendChild(summary);
    console.log(article)
    result_div.appendChild(article);
}