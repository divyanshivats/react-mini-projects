import useHackerNews from "../hooks/useHackerNews";
import ArticlesList from "../components/ArticlesList";
import "../style/articles.css";


const ArticlesPage = () => {
  const { articles, loading } = useHackerNews();

  if (loading) return <p className="loading">Loading top articles...</p>;

  return <ArticlesList articles={articles} />;
};

export default ArticlesPage;
