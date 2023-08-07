import { React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./css/reset.css";
import "./css/App.css";
import './components/Header.css'

import Header from "./components/Header";
import Home from "./components/Home";
import ArticlePage from "./components/ArticlePage";

function App() {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json"
    )
      .then((response) => response.json())
      .then((data) =>
        setArticlesData(
          data.articles.filter((article, index) => {
            return index < 7;
          })
        )
      );
  }, []);

  //console.log(articlesData);

  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home articlesData={articlesData}/>}
          />
          <Route
            path="/article/:title"
            element={<ArticlePage articlesData={articlesData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
