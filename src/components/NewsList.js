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
        // const response = await axios.get(
        //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
        // );
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=f6de42028faa68e48a78df34dd15b251`
        );
        setNews(response.data.articles);
        console.log(response.data.articles);
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
      <span>
        <a
          style={{
            color: "green",
            marginLeft: "60%",
            fontSize: "20px",
            fontWeight: "bold",
          }}
          href="/login"
        >
          Back To Login Page
        </a>
      </span>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className={`news-list ${isGridView ? "grid-view" : ""}`}>
          {news.map((article) => (
            <p key={article.title} className="news-item">
              <Link to={`/news/${createSlug(article.title)}`}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                {article.image ? (
                  <img src={article.image} alt={article.title} />
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
