export default function Header() {
  return (
    <header className="header">
      <img
        src="src/assets/images/logo.svg"
        alt="Website logo"
        className="header_logo"
      />
      <button className="header__open-menu-btn">
        <img
          src="./src/assets/images/icon-menu.svg"
          alt=""
        />
      </button>
      <div className="header__nav-wrapper">
          <nav className="header__nav">
            <button className="header__close-menu-btn">
              <img
                src="./src/assets/images/icon-menu-close.svg"
                alt=""
              />
            </button>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </nav>
      </div>
    </header>
  );
}
