import { GET } from "./api.js";
import { qS, qSA, movieCardGen, modalGen } from "./utils.js";

const topRatedEl = qS(".top-rated");
const mostPopularEl = qS(".most-popular");
const modalEl = qS(".modal");
const modalOverlay = qS(".overlay");
const upcomingEl = qS(".upcoming");

Promise.all([
  GET("movie", "top_rated"),
  GET("movie", "popular"),
  GET("movie", "upcoming"),
])
  .then((data) => {
    data[0].results.map((movie) => topRatedEl.append(movieCardGen(movie)));
    data[1].results.map((movie) => mostPopularEl.append(movieCardGen(movie)));
    data[2].results.map((movie) => upcomingEl.append(movieCardGen(movie)));
  })
  .then(() => {
    const movieEls = qSA(".movie");

    movieEls.forEach((movie) =>
      movie.addEventListener("click", () =>
        GET("movie", movie.id).then((selectedMovie) => {
          modalEl.appendChild(modalGen(selectedMovie));
          modalEl.style.display = "flex";
        })
      )
    );
  });

modalOverlay.addEventListener("click", () => {
  const modalMovieEl = qS(".movie-modal");

  modalEl.style.display = "none";
  modalMovieEl.remove();
});
