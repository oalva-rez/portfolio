import React from "react";

export default function Footer() {
  return (
    <footer>
      <div>Copyright © 2022 All rights reserved.</div>
      <div className="footer--icons">
        <a href="https://github.com/oalva-rez" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div>
        <a href="#">Source code available</a>
      </div>
    </footer>
  );
}
