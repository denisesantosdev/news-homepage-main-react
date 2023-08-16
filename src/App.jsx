import { React, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./css/reset.css";
import "./css/App.css";
import "./components/Header.css";

import Header from "./components/Header";
import Home from "./components/Home";
import ArticlePage from "./components/ArticlePage";
import { getArticlesData } from "./API";

function App() {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    async function loadArticlesData() {
      const data = await getArticlesData();
      setArticlesData(data);
    }

    loadArticlesData();
  }, []);

  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home articlesData={articlesData} />}
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
