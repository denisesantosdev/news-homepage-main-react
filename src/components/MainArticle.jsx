export default function MainArticle(props) {
    //console.log(props)
  return (
    <section className="main-article">
      <img
        src={props.mainArticle.urlToImage}
        alt=""
        className="main-article__img"
      />
      <div className="main-article__text">
        <h1 className="main-article__title">{props.mainArticle.title}</h1>
        <div className="main-article__description">
            <p>
            {props.mainArticle.description}
            </p>
            <a href="#">Read More</a>
        </div>
      </div>
    </section>
  );
}
