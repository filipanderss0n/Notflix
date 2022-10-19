const movieListEl = document.querySelector(".movies__container")
const landingContainerEl = document.querySelector(".landing__container");


async function searchBarForm(event) {
    const movieValue = event.target.value;
    const movies = await fetch (`https://www.omdbapi.com/?apikey=54341e23&s=${movieValue}`)
    const moviesData = await movies.json()
    movieListEl.innerHTML = moviesData.Search.map((movie) => moviesHMTL(movie)).join("")
}


function moviesHTML(movie) {
    return `<div class="movie__container">
    <div class="movie">
        <div class="movie__poster">
            <img src=${movie.Poster} class="movie__poster--img" alt="">
        </div>
        <div class="movie__info--container">
            <div class="movie__title">${movie.Title}</div>
            <div class="movie__year">${movie.Year}</div>
        </div>
    </div>
</div>`;
}










