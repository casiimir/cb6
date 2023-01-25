// JSON
// import myJson from "./mock.json" assert { type: "json" };

const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};

const cE = (element) => document.createElement(element);

const qS = (type) => document.querySelector(type);

const ageStatusBarGen = (value, userAge) => {
  const wrapper = cE("div");
  const textEl = cE("h4");
  const statusEl = cE("div");

  wrapper.className = "age-status-bar";
  textEl.textContent = value;
  statusEl.className = "age-status-bar__status";
  statusEl.style.height = `${userAge * 10}px`;

  //   setInterval(() => {
  statusEl.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  //   }, 1000);

  wrapper.append(textEl, statusEl);
  return wrapper;
};

const BASE_URL = "https://dummyjson.com/";
const wrapperEl = qS(".wrapper");
let firstStage, secondStage, thirdStage, fourthStage, fifthStage;
let stagesCount = [];

GET("users?limit=100")
  .then(({ users }) => {
    const usersAge = users.map((user) => user.age);

    firstStage = {
      ages: usersAge.filter((age) => age <= 19),
      text: "0 - 19",
    };
    secondStage = {
      ages: usersAge.filter((age) => age <= 29 && age >= 20),
      text: "20 - 29",
    };
    thirdStage = {
      ages: usersAge.filter((age) => age <= 39 && age >= 30),
      text: "30 - 39",
    };
    fourthStage = {
      ages: usersAge.filter((age) => age <= 49 && age >= 40),
      text: "40 - 49",
    };
    fifthStage = {
      ages: usersAge.filter((age) => age <= 59 && age >= 50),
      text: "50 - 59",
    };

    stagesCount.push(
      firstStage,
      secondStage,
      thirdStage,
      fourthStage,
      fifthStage
    );
  })
  .then(() => {
    stagesCount.map((stage) =>
      wrapperEl.appendChild(ageStatusBarGen(stage.text, stage.ages.length))
    );
  });

// console.log(myJson);
