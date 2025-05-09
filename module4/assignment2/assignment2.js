window.onload = function () {
    const query = document.querySelector('#query');
    const form = document.querySelector('#form');


    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const input = `https://api.tvmaze.com/search/shows?q=${query.value}`;
        const response = await fetch(input);
        const json = await response.json();
        console.log(json);
    });
}

