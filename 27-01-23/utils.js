const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);

const movieCardGen = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");

  cardEl.setAttribute("id", data.id);
  cardEl.className = "movie";
  if (data.poster_path) {
    imgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  }
  imgEl.setAttribute("alt", data.title);
  cardEl.appendChild(imgEl);

  return cardEl;
};

const modalGen = (data) => {
  const modalEl = cE("div");
  const imgEl = cE("img");
  const wrapperTextEl = cE("div");
  const titleEl = cE("h2");
  const overviewEl = cE("p");
  const releaseDateEl = cE("p");
  const voteAverageEl = cE("p");

  modalEl.className = "movie-modal";
  imgEl.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  imgEl.alt = data.title;
  titleEl.textContent = data.title;
  overviewEl.textContent = data.overview;
  releaseDateEl.textContent = data.release_date;
  voteAverageEl.textContent = data.vote_average;

  wrapperTextEl.append(titleEl, overviewEl, releaseDateEl, voteAverageEl);
  modalEl.append(imgEl, wrapperTextEl);
  return modalEl;
};

export { qS, qSA, cE, movieCardGen, modalGen };
