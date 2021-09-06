const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const env = require("dotenv").config();
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;

const constructURL = (country = "", category = "") => {
  if (!!country) {
    return `https://newsapi.org/v2/top-headlines?country=${country.toLowerCase()}&apiKey=${
      process.env.NEWS_API
    }`;
  } else if (!!category && !country) {
    return `https://newsapi.org/v2/top-headlines?q=${category.toLowerCase()}&apiKey=${
      process.env.NEWS_API
    }`;
  } else {
    const message = "Please provide a country or category";
    return console.log(message);
  }
};

app.get("/", async (req, res) => {
  const data = {
    version: "1.0.0",
    name: "News API",
    poweredBy: "News API",
    github: "https://github.com/vigneshshettyin/React-News-App",
  };
  res.status(200).json(data);
});

app.get("/api/top-headlines", (req, res) => {
  const { country } = req.query;
  if (!country) {
    return res.status(400).json({
      message: "Please provide a country",
    });
  } else {
    fetch(constructURL(country))
      .then((response) => response.json())
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong",
          error: err,
        });
      });
  }
});

app.get("/api/top-headlines/search", (req, res) => {
  const { category } = req.query;
  if (!category) {
    return res.status(400).json({
      message: "Please provide a category",
    });
  } else {
    fetch(constructURL("", category))
      .then((response) => response.json())
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong",
          error: err,
        });
      });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port : ${PORT} 💯`);
});
