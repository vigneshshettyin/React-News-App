import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Select from "react-select";
import countryList from "react-select-country-list";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import NewsGrid from "./component/news-grid/newsGrid";
import { useParams } from "react-router";

const News = () => {
  const params = useParams();

  const [darkMode, setDarkMode] = useState(true);

  const [news, setNews] = useState();

  const [search, setSearch] = useState("Covid 19");

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    getNews(`?country=${value.value}`);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", false);
  }, []);

  if (darkMode) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  useEffect(() => {
    if (!!params.id) {
      getNews(`/search?category=${params.id}`);
      console.log("Network Call 🤭");
    } else {
      console.log("No Network Call 😲");
    }
  }, [params.id]);

  const buttonHandler = () => {
    if (search.length > 0) {
      getNews(`/search?category=${search}`);
    } else {
      alert("Please enter a search term!");
    }
  };

  useEffect(() => {
    if (!params.id) {
      getNews("?country=in");
      console.log("It's my turn. Network Call ⚛️");
    } else {
      console.log("It's not my turn. No Network Call 😆");
    }
  }, [params.id]);

  const getNews = async (q) => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}${q}`)
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Select
              className="m-1"
              options={options}
              onChange={changeHandler}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control m-1"
              placeholder="Search ....."
            />
          </div>
          <div className="col-md-2">
            <center>
              <button onClick={buttonHandler} className="btn btn-primary">
                Search 🔭
              </button>
            </center>
          </div>
          <div className="col-md-2">
            <center>
              <button
                className="dark-mode-button"
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              >
                {darkMode ? "🌤️" : "🌃"}
              </button>
            </center>
          </div>
        </div>
      </div>

      {news ? (
        news.map((item, index) => {
          return (
            <NewsGrid
              key={index}
              title={item.title}
              img={item.urlToImage}
              desc={item.description}
              date={item.publishedAt}
              url={item.url}
              author={item.author}
            />
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
      <Footer />
    </>
  );
};

export default News;

export {};
