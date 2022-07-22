import React from "react";
import "./footer.css";
import { FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

function Footer() {
  const d = new Date();
  return (
    <footer id="footer">
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#services">Skills</a>
        </li>
        <li>
          <a href="#testimonial">Review</a>
        </li>
      </ul>

      <div className="footer__social">
        <a href="https://instagram.com" target={"black"}>
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target={"black"}>
          <FiTwitter />
        </a>
        <a href="https://github.com" target={"black"}>
          <FiGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          &copy; OUTLAWZ. All rights reserved 2021-{d.getFullYear()}.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
