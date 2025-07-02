import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles }) => {
  return (
    <div className="articles-container">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
