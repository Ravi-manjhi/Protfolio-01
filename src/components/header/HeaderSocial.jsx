import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function HeaderSocial() {
  return (
    <div className="header__social">
      <a href="https://linkedin.com" target="blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com" target="blank">
        <FaTwitter />
      </a>
    </div>
  );
}

export default HeaderSocial;
