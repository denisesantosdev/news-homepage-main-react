import { React, useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import MainArticle from "./components/MainArticle";
import NewArticles from "./components/NewArticles";
import ArticleList from "./components/ArticleList";

function App() {
  const [articlesData, setArticlesData] = useState("");

  useEffect(() => {
    fetch(
      "https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json"
    )
      .then((response) => response.json())
      .then((data) =>
        setArticlesData(
          data.articles.filter((article,index)=>{
            return index < 6
          })
        )
      );
  }, []);

  console.log(articlesData);

  return (
    <>
      <Header />
      <MainArticle />
      <NewArticles />
      <ArticleList />
    </>
  );
}

export default App;
