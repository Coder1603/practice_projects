const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const body = document.querySelector(".row.body");
const form = document.getElementById("form");
const search = document.getElementById("search");

renderMovies(API_URL);

function renderMovies(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => handleRender(data));
}

function handleRender(data) {
  const htmls = data.results.map((movie) => {
    const string = "";
    var result = string.concat(
      `
        <div class="col-xl-3 col-lg-4 col-md-6 col-12 movie">
        <img src="${IMG_PATH + movie.poster_path}" alt="${
        movie.title
      }" class="poster">
        <div class="movie-info">
          <h4>${movie.title}</h4>
          <span class="${getClassByRate(movie.vote_average)}">${
        movie.vote_average
      }</span>
        </div>
        <div class="overview">
          <h4 >Overview</h4>
          <div class="detail">
            ${movie.overview}
          </div>
        </div>
      </div>`
    );
    return result;
  });
  body.innerHTML = htmls.join("");
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    renderMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});
