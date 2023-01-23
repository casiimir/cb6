// ASYNC / AWAIT

const BASE_URL = "https://dummyjson.com/";

// ex. /product
const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};

// ex. /products/add
const POST = async (endpoint, body) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

const DELETE = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

const PUT = async (endpoint, body) => {
  const res = await fetch(BASE_URL + endpoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};

export { GET, POST, DELETE, PUT };

// ASYNC / AWAIT  => exc. FUNCTIONS

// function nomeFunzione(...args) {
// riga esecuzione 1 SYNC
// riga esecuzione 2 ASYNC
// riga esecuzione 3 SYNC
// ...
// ...
// ... risultato della riga 58 (dopo 3 sec)
// }

// async function nomeFunzioneAsincrona(...args) {
// riga esecuzione 1 SYNC
// AWAIT riga esecuzione 2 ASYNC - 3 secondi e si ferma il flusso della funzione, fintanto che non passano i 3 secondi
// riga esecuzione 3 SYNC
// ...
// }
