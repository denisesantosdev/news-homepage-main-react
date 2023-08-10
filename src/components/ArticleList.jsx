import { Link } from "react-router-dom";

export default function ArticleList(props) {
  //console.log(props);

  const articleListElement = props.articleList
    .filter((item, index) => {
      return index >= 4;
    })
    .map((item, index) => {
      return (
        <li
          className="article-list__item"
          key={index}>
          <img
            src={item.urlToImage}
            alt=""
            className="article-list__img"
          />
          <div className="article-list__text">
            <Link to={`/article/${item.title}`}>
              <h2 className="article-list__title">{item.title}</h2>
            </Link>

           
          </div>
        </li>
      );
    });

  return (
    <section className="article-list">
      <ul>{articleListElement}</ul>
    </section>
  );
}
