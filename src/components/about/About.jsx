import React from "react";
import "./about.css";
import { useGlobleContext } from "../../context/AppContext";
import { FaAward, FaUser, FaFolderPlus } from "react-icons/fa";

function About() {
  const { setActiveNav } = useGlobleContext();

  return (
    <section
      id="about"
      onMouseOver={() => {
        setActiveNav("#about");
      }}
    >
      <h5>get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img
              src={require("../../assets/me-about.jpg")}
              alt="person-png"
              width="100%"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Web development</h5>
              <small>2+ year Working</small>
            </article>

            <article className="about__card">
              <FaUser className="about__icon" />
              <h5>data scientist</h5>
              <small>1+ Year Working</small>
            </article>

            <article className="about__card">
              <FaFolderPlus className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            assumenda perspiciatis odio hic praesentium atque delectus optio
            dolore voluptates nisi impedit sunt tempore, officiis consequatur
            quaerat.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
