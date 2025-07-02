const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const fetchTopNewsId = async () => {
  const res = await fetch(`${BASE_URL}/topstories.json`);
  const data = await res.json();
  return data.slice(0, 10);
};

export const getArticles = async (ids) => {
  const promises = ids.map(id =>
    fetch(`${BASE_URL}/item/${id}.json`).then(res => res.json())
  );
  return Promise.all(promises);
};
