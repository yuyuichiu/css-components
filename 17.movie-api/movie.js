// api key: 3fd2be6f0c70a2a598f084ddfb75487c
const main = document.getElementById('main');
// API usages:
// Discover Trending Movies -- https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

// Movie API testing
// Attributes: title, vote_average (rating), overview, backdrop_path
async function getMovie(){
    const raw = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
                        .then(data => data.json())
                        .then((info) => {
                            info.results.forEach((movie) => {
                                console.log([movie.title,movie.vote_average,movie.backdrop_path,movie.overview]);
                            });
                        });
}

// Create new movie card
function generateMovieCard(){
    // The card itself
    let card = document.createElement('div');
    card.classList.add('movie');
    // Card contents
    let moviePicture = "";
    let movieTitle = "";
    let movieRating = 9.8;
    let movieOverview = "";


    // Append card to main HTML
    main.appendChild(card);
}

getMovie();
