import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Select from "react-select";
import countryList from "react-select-country-list";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import NewsGrid from "./component/news-grid/newsGrid";

const News = () => {
  const [news, setNews] = useState();

  const [search, setSearch] = useState("Covid 19");

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    getNews(`top-headlines?country=${value.value}`);
  };

  const buttonHandler = () => {
    if (search.length > 0) {
      getNews(`everything?q=${search}`);
    } else {
      alert("Please enter a search term!");
    }
  };

  useEffect(() => {
    getNews("top-headlines?country=in");
  }, []);

  const getNews = async (q) => {
    await axios
      .get(
        `https://newsapi.org/v2/${q}&apiKey=${process.env.REACT_APP_NEWS_API}`
      )
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
          <div className="col-md-5">
            <Select
              className="m-1"
              options={options}
              onChange={changeHandler}
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              class="form-control m-1"
              placeholder="Search ....."
            />
          </div>
          <div className="col-md-2">
            <center>
              <button onClick={buttonHandler} class="btn btn-primary">
                Search 🔭
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