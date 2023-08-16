export async function getArticlesData() {
    const res = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/science/us.json"
      )
    const data = await res.json()

    return data.articles
    
    /* 
        .then((response) => response.json())
        .then((data) =>
          setArticlesData(
            data.articles.filter((article, index) => {
              return index < 7;
            })
          )
        ); */
}