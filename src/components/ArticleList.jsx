export default function ArticleList() {
  return (
    <section className="article-list">
      <ul>
        <li>
          <img
            src="./src/assets/images/image-retro-pcs.jpg"
            alt=""
            className="article-list__img"
          />
          <div className="article-list__text">
            <a href="#">
              <h2 className="article-list__title">Reviving Retro PCs</h2>
            </a>
            <p className="article-list__description">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </li>
        <li>
          <img
            src="./src/assets/images/image-top-laptops.jpg"
            alt=""
            className="article-list__img"
          />
          <div className="article-list__text">
            <a href="#">
              <h2 className="article-list__title">Top 10 Laptops of 2022</h2>
            </a>
            <p className="article-list__description">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </li>
        <li>
          <img
            src="./src/assets/images/image-gaming-growth.jpg"
            alt=""
            className="article-list__img"
          />
          <div className="article-list__text">
            <a href="#">
              <h2 className="article-list__title">The Growth of Gaming</h2>
            </a>
            <p className="article-list__description">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
