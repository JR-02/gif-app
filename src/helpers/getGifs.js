export const getGifs = async (search) => {
  const API_KEY = 'c57JWw6nRRdit9ffRxIpIBk3MAGkcPfO';
  const LIMIT = '20';

  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&limit=${LIMIT}&api_key=${API_KEY}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
