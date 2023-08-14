import { Link } from "react-router-dom";

export default function MainArticle(props) {

  return (
    <section className="main-article">
      <img
        src={props.mainArticle[0].urlToImage}
        alt=""
        className="main-article__img"
      />
      <div className="main-article__text">
        <Link to={`/article/${props.mainArticle[0].title}`}>
          <h1 className="main-article__title">{props.mainArticle[0].title}</h1>
        </Link>
        <div className="main-article__description">
          <p>{props.mainArticle[0].description}</p>
          <Link to={`/article/${props.mainArticle[0].title}`}>Read More</Link>
        </div>
      </div>
    </section>
  );
}
