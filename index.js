// creates event listeners
document.getElementById('newJokeBtn').addEventListener('click', getNewJoke);
// document.getElementById('punchlineBtn').addEventListener('click', getPunchline);

// getJoke function
async function getNewJoke() {
    // fetches joke
    const jokePromise = await fetch
    ('https://official-joke-api.appspot.com/jokes/programming/random');

    // Consumes json data
    const joke = await jokePromise.json();

    console.log(joke);
}

getNewJoke();