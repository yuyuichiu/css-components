// API key: 3fd2be6f0c70a2a598f084ddfb75487c
// API for discovering trending movies -- https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
const apiKey = "3fd2be6f0c70a2a598f084ddfb75487c";
const main = document.getElementById('main');
const searchBar = document.getElementById('search');

// Retrieve collections of movie based on sort criteria
async function getPopularMovies(key){
    // Clear existing movie cards
    main.innerHTML = "";

    // Attributes: title, vote_average (rating), overview, poster_path
    await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&include_adult=false&sort_by=popularity.desc`)
        .then(data => data.json())
        .then((info) => {
            info.results.forEach((movie) => {
                generateMovieCard(movie.title, movie.vote_average, movie.poster_path, movie.overview);
            });
        });
}

// Retrieve movie based on search words
async function searchMovies(key,toSearch){
    // Clear existing movie cards
    main.innerHTML = "";
    try{
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${toSearch}&page=1&include_adult=false`)
            .then(data => data.json())
            .then((info) => {
                info.results.forEach((movie) => {
                    generateMovieCard(movie.title, movie.vote_average, movie.poster_path, movie.overview);
                });
            })
    }
    catch{
        console.log("Error: no movie found");
    }
}

searchBar.addEventListener('input',() => {
    console.log(searchBar.value);
    if(searchBar.value !== ""){
        searchMovies(apiKey,searchBar.value);
    }
    else{
        getPopularMovies(apiKey);
    }

});

// Create new movie card
function generateMovieCard(title,votes,img_path,overview){
    // The card itself
    let card = document.createElement('div');
    card.classList.add('movie');

    // Card contents - poster img, title, rating and movie overview
    let moviePicture = document.createElement('img');
    let moviePicLink =  "https://image.tmdb.org/t/p/w500" + img_path;
    moviePicture.setAttribute("src",moviePicLink);
    moviePicture.setAttribute("alt",title);

    let movieTitle = document.createElement('h3');
    movieTitle.innerText = title;
    movieTitle.classList.add('title');

    let movieRating = document.createElement('span');
    movieRating.innerText = votes;
    movieRating.classList.add('rating');
    if(votes >= 8.8){ movieRating.classList.add('great'); }
    else if(votes >= 6){ movieRating.classList.add('medium'); }
    else{ movieRating.classList.add('poor'); }

    let overviewDiv = document.createElement('div');
    let header = document.createElement('h3');
    let movieOverview = document.createElement('p');
    header.innerText = 'Overview';
    overviewDiv.classList.add('overview');
    movieOverview.innerText = overview;
    overviewDiv.appendChild(header);
    overviewDiv.appendChild(movieOverview);

    // Append components to card
    card.appendChild(overviewDiv);
    card.appendChild(moviePicture);
    card.appendChild(movieTitle);
    card.appendChild(movieRating);

    // Append card to main HTML
    main.appendChild(card);
}

getPopularMovies(apiKey);