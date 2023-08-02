import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NewsDetail.css";

const NewsDetail = () => {
  const { title } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const apiKey = "c66a4a4fc35a4b96ae40f046a628b109";
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
        );
        const data = await response.json();
        const matchedArticle = data.articles.find(
          (article) => createSlug(article.title) === title
        );

        if (matchedArticle) {
          setArticle(matchedArticle);
        } else {
          console.error("Article not found");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching article:", error);
        setLoading(false);
      }
    };

    fetchArticleDetails();
  }, [title]);

  const createSlug = (title) => {
    return title.replace(/\s+/g, "-").toLowerCase();
  };
  const handleCloseModal = () => {
    navigate("/news");
  };

  return (
    <div className="news-detail-overlay">
      <div className="news-detail-modal">
        {loading ? (
          <p>Loading...</p>
        ) : article ? (
          <div>
            <p className="close-button" onClick={handleCloseModal}>
              Close
            </p>

            <h2>{article.title}</h2>
            <p>{article.description}</p>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} />
            )}
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ) : (
          <p>Article not found.</p>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;
