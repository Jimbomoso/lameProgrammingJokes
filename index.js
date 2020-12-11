// creates event listeners
document.getElementById('newJokeBtn').addEventListener('click', getNewJoke);
// document.getElementById('punchlineBtn').addEventListener('click', getPunchline);

// creates variables and assigns their divs
const setupDiv = document.getElementById('setup');
const punchlineDiv = document.getElementById('punchline');

// getJoke function
async function getNewJoke() {
    // fetches joke
    const jokePromise = await fetch
    ('https://official-joke-api.appspot.com/jokes/programming/random');

    // Consumes json data
    const joke = await jokePromise.json();

    // Grabs joke setup from returned joke array and inserts into its div
    setupDiv.innerHTML = joke[0].setup;

    // Grabs joke punchline returned from joke array and inserts into its div
    punchline = joke[0].punchline;
    punchlineDiv.innerHTML = punchline;
}

getNewJoke();

