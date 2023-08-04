import { React, useEffect, useState } from "react";

import MainArticle from "./MainArticle";
import NewArticles from "./NewArticles";
import ArticleList from "./ArticleList";

export default function Home(props) {

  return props.articlesData.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <MainArticle mainArticle={props.articlesData} />
      <NewArticles newArticles={props.articlesData} />
      <ArticleList articleList={props.articlesData} />
    </>
  );
}
