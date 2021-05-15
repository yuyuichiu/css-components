const jokeDiv = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Initial Joke
generateJoke();
// Get a new joke on button click
jokeBtn.addEventListener('click',generateJoke);

function generateJoke() {
    // Set btn to loading state
    jokeBtn.innerHTML = "Loading...";

    const config = {
        headers: {
            'Accept': 'application/json',
        }
    }

    fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => {
        // Display the fetched joke on website
        jokeDiv.innerHTML = data.joke;
    } );

    
    // Set btn to normal
    jokeBtn.innerHTML = "Get Another Joke";
}