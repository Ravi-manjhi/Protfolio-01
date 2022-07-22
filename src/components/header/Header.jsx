import React from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocial";
import { useGlobleContext } from "../../context/AppContext";

function Header() {
  const { setActiveNav } = useGlobleContext();
  return (
    <header
      id="home"
      onMouseOver={() => {
        setActiveNav("#home");
      }}
    >
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Ravi Manjhi</h1>
        <h5 className="text-light">Data Scientist | Web Developer</h5>

        <div className="cta">
          <a href={require("../../assets/cv.pdf")} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>

        <div className="me">
          <img
            src={require("../../assets/me.png")}
            alt="person-img"
            width="100%"
          />
        </div>

        <a href="#contact" className="scroll_down">
          scroll down
        </a>

        <HeaderSocial />
      </div>
    </header>
  );
}

export default Header;
