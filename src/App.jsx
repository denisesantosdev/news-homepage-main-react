import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import MainArticle from './components/MainArticle'
import NewArticles from './components/NewArticles'
import ArticleList from './components/ArticleList'


function App() {

  return (
    <>
      <Header />
      <MainArticle />
      <NewArticles />
      <ArticleList />
    </>
  )
}

export default App
