// Esercizio Avanzato 23-01-23
// import { GET } from "./api.js";

// const quoteCard = (data) => {
//   const quoteEl = document.createElement("div");
//   const quoteTextEl = document.createElement("h3");
//   const quoteAuthorEl = document.createElement("p");

//   quoteEl.className = "quote";
//   quoteEl.setAttribute("id", data.id);
//   quoteTextEl.textContent = data.quote;
//   quoteAuthorEl.textContent = data.author;

//   quoteEl.append(quoteTextEl, quoteAuthorEl);
//   return quoteEl;
// };

// const onBtnClick = () => {
//   document.querySelector(".quote")?.remove();
//   randomIndex = Math.floor(Math.random() * 30);

//   GET(`quotes/${randomIndex + 1}`).then((quote) =>
//     bodyEl.appendChild(quoteCard(quote))
//   );
// };

// let randomIndex = Math.floor(Math.random() * 30);
// const bodyEl = document.body;
// const quoteBtnEl = document.createElement("button");

// quoteBtnEl.className = "btn-quote";
// quoteBtnEl.textContent = "Generate";
// bodyEl.appendChild(quoteBtnEl);

// quoteBtnEl.addEventListener("click", onBtnClick);

import { GET } from "./api.js";

const cE = (type) => document.createElement(type);

const postGen = (data) => {
  //   const { title, body, reactions, tags } = data;
  const wrapper = cE("div");
  const titleEL = cE("h3");
  const bodyEl = cE("p");
  const tagEl = cE("p");
  const reactionEl = cE("p");

  wrapper.setAttribute("id", data.id);
  wrapper.className = "post";
  titleEL.textContent = data.title;
  bodyEl.textContent = data.body;
  reactionEl.textContent = data.reactions;
  tagEl.textContent = data.tags.join();

  if (data.tags.includes("magical")) wrapper.classList.add("post__magical");
  if (data.tags.includes("history")) wrapper.classList.add("post__history");
  if (data.tags.includes("english")) wrapper.classList.add("post__english");
  if (data.tags.includes("american")) wrapper.classList.add("post__american");
  if (data.tags.includes("classic")) wrapper.classList.add("post__classic");
  if (data.tags.includes("fiction")) wrapper.classList.add("post__fiction");

  wrapper.append(titleEL, bodyEl, tagEl, reactionEl);
  return wrapper;
};

const onPostsDelete = () => {
  const postsEls = document.querySelectorAll(".post");

  postsEls.forEach((post) => post.remove());
};

const bodyEl = document.body;
const searchInputEl = cE("input");
let searchedValue = "";

bodyEl.appendChild(searchInputEl);

// GET("posts?limit=10").then((data) =>
//   data.posts.map((post) => {
//     if (post.body.includes(searchedValue)) bodyEl.appendChild(postGen(post));
//   })
// );
// GET("posts?limit=10").then(({ posts }) => console.log(posts));

searchInputEl.addEventListener("input", (e) => {
  onPostsDelete();
  searchedValue = e.target.value;

  GET("posts?limit=10").then((data) =>
    data.posts.map((post) => {
      if (post.title.includes(searchedValue)) bodyEl.appendChild(postGen(post));
    })
  );
});

GET("posts?limit=10")
  .then((data) => data.posts.map((post) => bodyEl.appendChild(postGen(post))))
  .then(() => {
    const postEls = document.querySelectorAll(".post");

    postEls.forEach((post) =>
      post.addEventListener("click", () => console.log(post.id))
    );
  });
