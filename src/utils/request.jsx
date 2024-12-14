const localHost = "https://dummyjson.com/";
export const get = async (path) => {
  const response = await fetch(localHost + path);
  const result = await response.json();
  return result;
}