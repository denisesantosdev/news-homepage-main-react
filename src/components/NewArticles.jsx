export default function NewArticles() {
    return (
        <aside className="new-articles-section">
            <h2>New</h2>
            <ul className="new-articles">
                <li className="new-articles__item">
                    <a href="#">
                        <h3 className="new-articles__title">Hydrogen VS Electric Cars</h3>
                    </a>
                    <p className="new-articles__description">Will hydrogen-fueled cars ever catch up to EVs?</p>
                </li>
                <li className="new-articles__item">
                    <a href="#">
                        <h3 className="new-articles__title">The Downsides of AI Artistry</h3>
                    </a>
                    <p className="new-articles__description">What are the possible adverse effects of on-demand AI image generation?</p>
                </li>
                <li className="new-articles__item">
                    <a href="#">
                        <h3 className="new-articles__title">Is VC Funding Drying Up?</h3>
                    </a>
                    <p className="new-articles__description">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </li>
            </ul>
        </aside>
    )
}