import React from 'react'

const ArticleCard = ({article}) => {
  return (
     <div className="article-card">
      <h3 className="article-title">{article.title}</h3>
      <p className="article-author">👤 {article.by}</p>
      <p className="article-score">⭐ Score: {article.score}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">
        🔗 Read More
      </a>
    </div>
  )
}

export default ArticleCard
