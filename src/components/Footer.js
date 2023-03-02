import React from "react";

export default function Footer() {
  return (
    <footer>
      <div>Copyright © 2023 All rights reserved.</div>
      <div className="footer--icons">
        <a href="https://github.com/oalva-rez" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/ozkar-alvarez-391929259"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <div>
        <a
          href="https://github.com/oalva-rez/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Source code available
        </a>
      </div>
    </footer>
  );
}
