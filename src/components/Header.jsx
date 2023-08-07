import React from "react";
export default function Header() {
  /* 
        toggle menu:
        toggleMenu state false
        when open menu btn is clicked
        setToggleMenu to true
        when close  menu btn is clicked
        setToggleMenu to flase
        
        if toggleMenu is true add class "show-menu" if false add nothing

    */
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <header className="header">
      <img
        src="src/assets/images/logo.svg"
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

      {toggleMenu && (
        <div className="header__nav-wrapper">
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
      )}
    </header>
  );
}
