window.onload = async function () {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const result = await response.json();

    console.log(result.value);
}