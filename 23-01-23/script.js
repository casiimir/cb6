import { qS, cE, productCard } from "./utils.js";
import { GET, POST, DELETE, PUT } from "./api.js";

const bodyEl = qS("body");
const wrapperEl = cE("div");
wrapperEl.className = "wrapper";
bodyEl.appendChild(wrapperEl);

// let product1 = {};

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) =>
//     data.products.map((product) => wrapperEl.appendChild(productCard(product)))
//   );
//   .then(() => wrapperEl.appendChild(productCard(product1)));

GET("products").then((data) =>
  data.products.map((product) => wrapperEl.appendChild(productCard(product)))
);

POST("products/add", {
  title: "pippo",
  firstName: "pluto",
  price: 222,
});

DELETE("products/10");

PUT("products/5", {});
