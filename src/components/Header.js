import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menu from "react-burger-menu/lib/menus/slide";

export default function Header({ isMobile }) {
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
  console.log(formatPathToTitle(pathname));
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
              <Link to="/">Home</Link>
            </li>
            <li
              className={
                pathname === "/about"
                  ? "nav--selected mobile--li"
                  : "mobile--li"
              }
              onClick={closeMenu}
            >
              <Link to="about">About</Link>
            </li>
            <li
              className={
                pathname === "/projects"
                  ? "nav--selected mobile--li"
                  : "mobile--li"
              }
              onClick={closeMenu}
            >
              <Link to="projects">Projects</Link>
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
        <h1 className="mobile--h1">{formatPathToTitle(pathname)}</h1>
      </header>
    );
  } else {
    return (
      <header className="desktop--header">
        <nav>
          <ul>
            <li className={pathname === "/" ? "nav--selected" : null}>
              <Link to="/">Home</Link>
            </li>
            <li className={pathname === "/about" ? "nav--selected" : null}>
              <Link to="about">About</Link>
            </li>
            <li className={pathname === "/projects" ? "nav--selected" : null}>
              <Link to="projects">Projects</Link>
            </li>
            <li className={pathname === "/contact" ? "nav--selected" : null}>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
