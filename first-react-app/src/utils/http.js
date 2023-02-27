const QUOTE_URL = "https://dummyjson.com/quotes";

export const GET = async (BASE_URL = QUOTE_URL) => {
  const res = await fetch(BASE_URL);
  const data = await res.json();

  return data;
};
