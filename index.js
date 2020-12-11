// creates event listeners
document.getElementById('newJokeBtn').addEventListener('click', getNewJoke);
// document.getElementById('punchlineBtn').addEventListener('click', getPunchline);

// creates variables and assigns their divs
const setupDiv = document.getElementById('setup');

// getJoke function
async function getNewJoke() {
    // fetches joke
    const jokePromise = await fetch
    ('https://official-joke-api.appspot.com/jokes/programming/random');

    // Consumes json data
    const joke = await jokePromise.json();

    console.log(joke);

    // Grabs returned joke setup and inserts into its div
    setupDiv.innerHTML = joke[0].setup;
}

getNewJoke();