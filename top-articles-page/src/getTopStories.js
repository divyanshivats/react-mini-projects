const URL = "https://hacker-news.firebaseio.com/v0/topstories.json";

const fetchTopNewsId = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data.slice(0,10);
}
export {fetchTopNewsId};