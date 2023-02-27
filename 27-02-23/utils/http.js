export const GET = async (BASE_URL) => {
  const res = await fetch(BASE_URL);
  const data = res.json();

  return data;
};
