// TRY, CATCH & FINALLY - Throw
// const userNum = prompt("Inserisci un numero");
// const parsedUserNum = parseInt(userNum);

// try {
//   if (!isNaN(parsedUserNum)) {
//     console.log(`La somma tra 5 e ${parsedUserNum}: ${5 + parsedUserNum}`);
//   } else {
//     // throw new error(`Attenzione, il tipo inserito è ${typeof userNum}`);
//     throw `Attenzione, il tipo inserito è ${typeof userNum}`;
//   }
// } catch (e) {
//   console.error(e);
// } finally {
//   console.log("Questo messaggio verrà eseguito comunque");
// }

const images = [
  "https://picsum.photos/500/500?1",
  "https://picsum.photos/500/500?2",
  "https://picsum.photos/500/500?3",
  "https://picsum.photos/500/500?4",
  "https://picsum.photos/500/500?5",
];

const carouselImgEl = document.querySelector(".carousel__img");
const leftBtnEl = document.querySelector(".left-btn");
const rightBtnEl = document.querySelector(".right-btn");
let carouselState = 0;
// let carouselState = {
//   left: 4,
//   right: 0,
// };

// rightBtnEl.addEventListener("click", () => {
//   if (carouselState.right < 5) {
//     carouselImgEl.setAttribute("src", images[carouselState.right]);
//   } else if (carouselState.right >= 5) {
//     rightBtnEl.setAttribute("disabled", true);
//     rightBtnEl.style.opacity = "0.3";
//     rightBtnEl.style.cursor = "inherit";
//   }

//   carouselState.right++;
// });

// leftBtnEl.addEventListener("click", () => {
//   if (carouselState.left >= 0) {
//     carouselImgEl.setAttribute("src", images.reverse()[carouselState.left]);
//   } else if (carouselState.right === 0) {
//     leftBtnEl.setAttribute("disabled", true);
//     leftBtnEl.style.opacity = "0.3";
//     leftBtnEl.style.cursor = "inherit";
//   }

//   carouselState.left--;
// });

// document.addEventListener("wheel", (e) => {
//   if (e.offsetY >= 220) {
//     carouselImgEl.style.border = "2px solid red";
//   } else {
//     carouselImgEl.style.border = "2px solid blue";
//   }
// });

rightBtnEl.addEventListener("click", () => {
  carouselImgEl.setAttribute("src", images[carouselState]);
  carouselState++;

  if (carouselState > 4) {
    carouselState = 0;
  }
});

leftBtnEl.addEventListener("click", () => {
  carouselImgEl.setAttribute("src", images[carouselState]);
  carouselState--;

  if (carouselState < 0) {
    carouselState = 4;
  }
});
