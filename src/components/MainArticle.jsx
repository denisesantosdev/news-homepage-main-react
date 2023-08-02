export default function MainArticle() {
  return (
    <section className="main-article">
      <img
        src="src/assets/images/image-web-3-mobile.jpg"
        alt=""
        className="main-article__img"
      />
      <div className="main-article__text">
        <h1 className="main-article__title">The Bright Future of Web 3.0?</h1>
        <div className="main-article__description">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is it
              really fulfilling its promise?
            </p>
            <a href="#">Read More</a>
        </div>
      </div>
    </section>
  );
}
