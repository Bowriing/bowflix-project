function outputMovies() {
    const images = JSON.parse(localStorage.getItem('images')) || [];
    let wrapperid;
    let movielistwrapper;

    for (let i = 0; i < images.length; i++) {
        // Create a new wrapper for every 5 images
        if (i % 5 === 0) {
            movielistwrapper = document.createElement("div");
            movielistwrapper.setAttribute("class", "movie-list-wrapper");
            wrapperid = "movie-list-wrapper" + (i / 5);
            movielistwrapper.setAttribute("id", wrapperid);
            document.getElementById("movie-list-container").appendChild(movielistwrapper);
        }

        const image = document.createElement("img");
        const movielistitem = document.createElement("div");
        movielistitem.setAttribute("class", "movie-list-item");
        movielistitem.setAttribute("id", "movie-list-item" + i);
        image.setAttribute("src", images[i]);
        image.setAttribute("class", "movie-thumbnail");

        movielistitem.appendChild(image);
        movielistwrapper.appendChild(movielistitem);
    }
}
