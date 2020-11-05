var api_key = config.api_key;

window.onload = () => {
    getOriginals()
    getTrendingNow();
    getTopRated();
}

function fetchMovies(url, element_selector, path_type) {
    fetch(url)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }else{
            throw new Error("something went wrong")
        }
    })
    .then((data) => {
        showMovies(data, element_selector, path_type)
    })
    .catch((error) => {
        console.log(error)
    })
}

function showMovies(movies, element_selector, path_type) {
    var moviesEl = document.querySelector(element_selector);
    
    for(var movie of movies.results){
        var image = `
            <img src="https://image.tmdb.org/t/p/original${movie[path_type]}" />
        `
        moviesEl.innerHTML += image;
    }
}

function getOriginals() {
    var url = "https://api.themoviedb.org/3/discover/tv?api_key=" + api_key
    fetchMovies(url, '.netflixOriginals__movies', 'poster_path')
}

function getTrendingNow() {
    var url = "https://api.themoviedb.org/3/trending/tv/week?api_key=" + api_key
    fetchMovies(url, '#trending', 'backdrop_path')
}

function getTopRated() {
    var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + api_key + "&language=en-US&page=1"
    fetchMovies(url, '#topRated', 'backdrop_path')
}