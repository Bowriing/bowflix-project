//create watchlist list
//wait for item to be added
//add item function 
//save to watclist

//remove item function
//check iff there
//if yes remove
//if no then forget

//update watchlist list

const images = []; // an array to store the movie images that are added to the watchlist
let selectedMovieThumbnail = null; // a variable to keep track of the selected movie thumbnail

function toggleMovieSelection(movieItem) {
    const movieThumbnail = movieItem.querySelector('.movie-thumbnail'); // get the movie thumbnail element
    const addToWatchlistBtn = movieItem.querySelector('.add-to-watchlist-btn'); // get the 'Add to Watchlist' button element

    // if another movie thumbnail is selected, unselect it first
    if (selectedMovieThumbnail !== null && selectedMovieThumbnail !== movieThumbnail) {
        selectedMovieThumbnail.style.outline = 'none';
        selectedMovieThumbnail.parentElement.querySelector('.add-to-watchlist-btn').style.display = 'none';
    }

    // if the current movie thumbnail is not already selected, select it
    if (movieThumbnail.style.outline === '' || movieThumbnail.style.outline === 'none') {
        movieThumbnail.style.outline = '5px solid white';
        addToWatchlistBtn.style.display = 'block';
        selectedMovieThumbnail = movieThumbnail;
    } 
    // if the current movie thumbnail is already selected, unselect it
    else {
        movieThumbnail.style.outline = 'none';
        addToWatchlistBtn.style.display = 'none';
        selectedMovieThumbnail = null;
    }
}

function addMovieToList(event, src, element) {
    event.stopPropagation(); // prevent event bubbling up to the parent elements

    images.push(src); // add the movie image to the watchlist
    localStorage.setItem('images', JSON.stringify(images)); // store the watchlist in local storage
    console.log('added to list');
    toggleMovieSelection(element.parentElement); // unselect the movie thumbnail after adding to watchlist

    button.style.display = 'none';

    const movieItem = button.parentElement;
    const movieThumbnail = movieItem.querySelector('.movie-thumbnail');
    movieThumbnail.style.outline = 'none';
}

function showAddToWatchlistButton(movieListItem) {
    const button = movieListItem.querySelector(".add-to-watchlist-btn"); // get the 'Add to Watchlist' button element
    button.style.display = "block"; // show the button
}

function hideAddToWatchlistButton(movieListItem) {
    const button = movieListItem.querySelector(".add-to-watchlist-btn"); // get the 'Add to Watchlist' button element
    button.style.display = "none"; // hide the button
}



