import { useState, useEffect } from "react";
import { fetchTopNewsId, getArticles } from "../services/hackerNewsAPI";

const useHackerNews = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticles = async () => {
      const ids = await fetchTopNewsId();
      const articles = await getArticles(ids);
      setArticles(articles);
      setLoading(false);
    };
    loadArticles();
  }, []);

  return { articles, loading };
};

export default useHackerNews;
