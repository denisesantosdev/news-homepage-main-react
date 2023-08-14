import React from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <header className="header">
      <img
        src="/logo.svg"
        alt="Website logo"
        className="header_logo"
      />
      <button
        className="header__open-menu-btn"
        onClick={() => setToggleMenu(true)}>
        <img
          src="./src/assets/images/icon-menu.svg"
          alt=""
        />
      </button>
      <div
        className={`header__nav-wrapper ${toggleMenu ? "show-menu" : ""}`}
        onClick={() => setToggleMenu(false)}>
        <nav className="header__nav">
          <button
            className="header__close-menu-btn"
            onClick={() => setToggleMenu(false)}>
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
