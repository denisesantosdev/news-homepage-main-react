export default function Header() {
    return (
        <header className="header">
            <img src="src/assets/images/logo.svg" alt="Website logo"
            className="header_logo"
            />
            <nav className="header__nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </nav>
        </header>
    )
}