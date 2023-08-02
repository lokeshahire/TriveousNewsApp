import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewsList.css";
import { Link } from "react-router-dom";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGridView, setIsGridView] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = "c66a4a4fc35a4b96ae40f046a628b109";
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
        );
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleToggleView = () => {
    setIsGridView((prevIsGridView) => !prevIsGridView);
  };

  const createSlug = (title) => {
    return title.replace(/\s+/g, "-").toLowerCase();
  };

  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXvkQqXjC1FpZpGAMx7MXyr3S97y6LWWavA&usqp=CAU";
  return (
    <div className="news-list-container">
      <button onClick={handleToggleView} className="toggle-button">
        {isGridView ? "List View" : "Grid View"}
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={`news-list ${isGridView ? "grid-view" : ""}`}>
          {news.map((article) => (
            <p key={article.title} className="news-item">
              <Link to={`/news/${createSlug(article.title)}`}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                {article.urlToImage ? (
                  <img src={article.urlToImage} alt={article.title} />
                ) : (
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLXvkQqXjC1FpZpGAMx7MXyr3S97y6LWWavA&usqp=CAU"
                    }
                    alt="Placeholder"
                  />
                )}
              </Link>
            </p>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsList;
