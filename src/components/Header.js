import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "react-burger-menu/lib/menus/slide";
import logo from "../assets/aphex-twin.png";
import aphexLogo from "../assets/aphex-logo.png";

export default function Header({ isMobile, cartItems }) {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  function handleStateChange(state) {
    setMenuOpen(state.isOpen);
  }
  function closeMenu() {
    setMenuOpen(false);
  }
  function formatPathToTitle(path) {
    if (path === "/") {
      return "Home";
    }
    const pathArray = path.split("/");
    const title = pathArray[pathArray.length - 1];
    return title.charAt(0).toUpperCase() + title.slice(1);
  }
  if (isMobile) {
    return (
      <header>
        <Menu isOpen={menuOpen} onStateChange={handleStateChange}>
          <ul className="mobile--ul">
            <li
              className={
                pathname === "/" ? "nav--selected mobile--li" : "mobile--li"
              }
              onClick={closeMenu}
            >
              <Link to="/">Beat Store</Link>
            </li>
            <li
              className={
                pathname === "/beat-store"
                  ? "nav--selected mobile--li"
                  : "mobile--li"
              }
              onClick={closeMenu}
            >
              <Link to="credits">Credits</Link>
            </li>
            <li
              className={
                pathname === "/projects"
                  ? "nav--selected mobile--li"
                  : "mobile--li"
              }
              onClick={closeMenu}
            >
              <Link to="licensing">Licensing</Link>
            </li>
            <li
              className={
                pathname === "/contact"
                  ? "nav--selected mobile--li"
                  : "mobile--li"
              }
              onClick={closeMenu}
            >
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </Menu>
        <h1 className="mobile--h1">
          {formatPathToTitle(pathname)}{" "}
          <img src={logo} alt="aphex" className="aphex-mobile" />
          <div className="cart-icon cart-mobile">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="cart-qty">{cartItems.length}</div>
          </div>
        </h1>
      </header>
    );
  } else {
    return (
      <header className="desktop--header">
        <img src={aphexLogo} alt="aphex" className="aphex-logo" />
        <nav>
          <ul>
            <li className="logo">
              <img src={logo} alt="aphex" />
            </li>
            <li className={pathname === "/beat-store" ? "nav--selected" : null}>
              <Link to="/">Beat Store</Link>
            </li>
            <li className={pathname === "/credits" ? "nav--selected" : null}>
              <Link to="about">Credits</Link>
            </li>
            <li className={pathname === "/licensing" ? "nav--selected" : null}>
              <Link to="projects">Licensing</Link>
            </li>
            <li className={pathname === "/contact" ? "nav--selected" : null}>
              <Link to="contact">Contact</Link>
            </li>
            <li>
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li className="cart-icon">
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="cart-qty">{cartItems.length}</div>
            </li>
            <li>
              <button className="free-beats">Get Free Beats</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
