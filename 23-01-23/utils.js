const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

// es:
// const wrapperEl = document.querySelector('.wrapper')
// const wrapperEl = qS('.wrapper')

const productCard = (data) => {
  const wrapperEl = cE("div");
  const imageEl = cE("img");
  const textWrapperEl = cE("div");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const priceEl = cE("span");
  const stockEl = cE("span");

  wrapperEl.className = "product-card";
  imageEl.setAttribute("src", data.thumbnail);
  imageEl.setAttribute("alt", data.title);
  textWrapperEl.className = "product-card__text";
  titleEl.textContent = data.title;
  descriptionEl.textContent = data.description;
  priceEl.textContent = `Price: ${data.price}`;
  stockEl.textContent = `Stock: ${data.stock}`;

  textWrapperEl.append(titleEl, descriptionEl, priceEl, stockEl);
  wrapperEl.append(imageEl, textWrapperEl);
  return wrapperEl;
};

export { cE, qS, productCard };
