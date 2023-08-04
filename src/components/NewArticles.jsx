import { Link } from 'react-router-dom'

export default function NewArticles(props) {
  //console.log(props.newArticles);

  const newArticlesElement = props.newArticles
    .filter((item, index) => {
      return index >= 1 && index <= 3;
    })
    .map((item, index) => {
      return (
        <li
          className="new-articles__item"
          key={index}>
          <Link to={`/article/${item.title}`}>
            <h3 className="new-articles__title">{item.title}</h3>
          </Link>
          <p className="new-articles__description">{item.description}</p>
        </li>
      );
    });

  return (
    <aside className="new-articles-section">
      <h2>New</h2>
      <ul className="new-articles">{newArticlesElement}</ul>
    </aside>
  );
}
