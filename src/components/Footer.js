import React from "react";
import logo from "../assets/aphex-twin.png";
import aphexLogo from "../assets/aphex-logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="" />
          <img src={aphexLogo} alt="" />
        </div>
        <div className="footer-details">
          <h3>Audio Services</h3>
          <ul>
            <li>Sound Recording</li>
            <li>Composing & Arranging</li>
            <li>Editing & Post Production</li>
            <li>Producing</li>
            <li>Sound Design</li>
          </ul>
        </div>
        <div>
          <h3>About Us</h3>
          <ul>
            <li>Team</li>
            <li>Tools</li>
            <li>Premises</li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>Phone</li>
            <li>Chat</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
      <div className="sub-footer">
        <p>© 2023 Aphex Twin Records. All rights reserved.</p>
        <ul>
          <li>
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-soundcloud"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
}
