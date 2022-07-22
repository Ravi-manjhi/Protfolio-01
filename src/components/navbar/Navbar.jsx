import React from "react";
import "./nav.css";
import { BiHome, BiUser, BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useGlobleContext } from "../../context/AppContext";

function Nav() {
  const { active, setActiveNav } = useGlobleContext();
  return (
    <nav>
      <a
        href="#home"
        id="#adfsdf"
        className={`${active === "#home" && "active"}`}
        onClick={() => {
          setActiveNav("#home");
        }}
      >
        <BiHome />
      </a>
      <a
        href="#about"
        className={`${active === "#about" && "active"}`}
        onClick={() => {
          setActiveNav("#about");
        }}
      >
        <BiUser />
      </a>
      <a
        href="#experience"
        className={`${active === "#experience" && "active"}`}
        onClick={() => {
          setActiveNav("#experience");
        }}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={`${active === "#services" && "active"}`}
        onClick={() => {
          setActiveNav("#services");
        }}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={`${active === "#contact" && "active"}`}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
