import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";

export default function ArticlePage(props) {
  const params = useParams();

   const article = props.articlesData.find(
    (item) => item.title === params.title
  ); 

  console.log(article);

  return (
    <article className="article-page">
      <Link
        className="article-page__back-btn"
        to="/">
        &#8592; Back
      </Link>
      <img
        src={article.urlToImage}
        className="article-page__img"
      />
      <h1 className="article-page__title">{article.title}</h1>
      <p className="article-page__content">{article.description}</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis perspiciatis quod vero officia corporis voluptas quibusdam incidunt libero reprehenderit dolorem, consequuntur eaque reiciendis, natus accusamus minus impedit voluptates facilis repudiandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi veritatis animi consectetur sint nihil labore quae corrupti dolorum quia, itaque, laudantium quasi eius distinctio beatae autem magnam expedita dolore. Est ad alias obcaecati quaerat voluptates omnis, odio laborum velit sint delectus repellendus expedita, debitis possimus earum nobis reiciendis cumque! Repellendus accusamus asperiores omnis nesciunt molestiae fugiat quisquam aliquid dolor veniam, ut in harum praesentium nisi exercitationem nobis incidunt perspiciatis sapiente commodi, eum at atque. Ab nemo, enim quod quidem dicta pariatur, repellat quo ad cumque quia porro laboriosam architecto totam. Facilis non suscipit inventore officia repellendus? Impedit dolores expedita magni.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis perspiciatis quod vero officia corporis voluptas quibusdam incidunt libero reprehenderit dolorem, consequuntur eaque reiciendis, natus accusamus minus impedit voluptates facilis repudiandae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi veritatis animi consectetur sint nihil labore quae corrupti dolorum quia, itaque, laudantium quasi eius distinctio beatae autem magnam expedita dolore. Est ad alias obcaecati quaerat voluptates omnis, odio laborum velit sint delectus repellendus expedita, debitis possimus earum nobis reiciendis cumque! Repellendus accusamus asperiores omnis nesciunt molestiae fugiat quisquam aliquid dolor veniam, ut in harum praesentium nisi exercitationem nobis incidunt perspiciatis sapiente commodi, eum at atque. Ab nemo, enim quod quidem dicta pariatur, repellat quo ad cumque quia porro laboriosam architecto totam. Facilis non suscipit inventore officia repellendus? Impedit dolores expedita magni.</p>
    </article>
  );
}