// const bodyEl = document.body;
// const titleEl = document.createElement("h1");
// const stopBtnEl = document.createElement("button");

// stopBtnEl.textContent = "stop";
// bodyEl.append(titleEl, stopBtnEl);

// Timemout

// const timeoutId = setTimeout(() => {
//   console.log(`${new Date().getMinutes()}m - ${new Date().getSeconds()}s`);
// }, 1000);

// Interval

// const intervalId = setInterval(() => {
//   titleEl.textContent = `${new Date().getMinutes()}m - ${new Date().getSeconds()}s`;
// }, 1000);

// clearTimeout(timeoutId);

// if (new Date().getMinutes() === 46) clearInterval(intervalId);

// const intervalId = setInterval(() => {
//   titleEl.textContent = `${new Date().getSeconds()}s`;
//   if (new Date().getSeconds() === 59) titleEl.textContent = "FINE!";
// }, 1000);

// stopBtnEl.addEventListener("click", () => clearInterval(intervalId));

// let timeout = 5;

// setInterval(() => {
//   if (timeout === 0) {
//     bodyEl.style.backgroundColor = "tomato";
//     titleEl.remove();
//   } else {
//     timeout--;
//     titleEl.textContent = timeout;
//   }
// }, 1000);

// Slider -

const images = [
  "https://picsum.photos/600/400?1",
  "https://picsum.photos/600/400?2",
  "https://picsum.photos/600/400?3",
];
let imgCounter = 0;

const bodyEl = document.body;
const wrapperEl = document.createElement("div");
const wrapperImgEl = document.createElement("img");
const grayscaleEl = document.querySelector(".greyscale");
const sepiaEl = document.querySelector(".sepia");
const contrastEl = document.querySelector(".contrast");
const saturateEl = document.querySelector(".saturate");
const resetBtnEl = document.querySelector(".reset-btn");

wrapperEl.className = "wrapper";
wrapperImgEl.setAttribute("src", images[0]);
wrapperImgEl.setAttribute("alt", `image 0`);

setInterval(() => {
  wrapperImgEl.src = images[imgCounter];
  wrapperImgEl.alt = `image ${imgCounter}`;
  imgCounter++;

  if (imgCounter >= images.length) {
    imgCounter = 0;
    bodyEl.style.background = "lightseagreen";
  }
}, 2000);

wrapperEl.appendChild(wrapperImgEl);
bodyEl.appendChild(wrapperEl);

grayscaleEl.addEventListener("input", (e) => {
  wrapperImgEl.style.filter = `grayscale(${e.target.value / 100})`;
});

sepiaEl.addEventListener("input", (e) => {
  wrapperImgEl.style.filter = `sepia(${e.target.value / 100})`;
});

contrastEl.addEventListener("input", (e) => {
  wrapperImgEl.style.filter = `contrast(${e.target.value / 20})`;
});

saturateEl.addEventListener("input", (e) => {
  wrapperImgEl.style.filter = `saturate(${e.target.value / 20})`;
});

// resetBtnEl.addEventListener("click", () => {
//   wrapperImgEl.style.filter = "grayscale(0)";
//   grayscaleEl.value = 50;
//   wrapperImgEl.style.filter = "sepia(0)";
//   sepiaEl.value = 50;
//   wrapperImgEl.style.filter = "contrast(0)";
//   contrastEl.value = 50;
//   wrapperImgEl.style.filter = "saturate(0)";
//   saturateEl.value = 50;
// });
