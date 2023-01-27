const API_KEY = "844b71143758b3e0e528c3a839ce2c9a";
const BASE_URL = "https://api.themoviedb.org/3/";

const GET = async (type = "movie", resource = "550") => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export { GET };
