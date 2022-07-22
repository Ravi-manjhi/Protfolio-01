import React from "react";
import "./protfolio.css";
import ProtfolioItem from "./ProtfolioItem";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>my recent works</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <ProtfolioItem img={require("../../assets/portfolio1.jpg")} />
        <ProtfolioItem img={require("../../assets/portfolio2.jpg")} />
        <ProtfolioItem img={require("../../assets/portfolio3.jpg")} />
        <ProtfolioItem img={require("../../assets/portfolio4.jpg")} />
        <ProtfolioItem img={require("../../assets/portfolio5.png")} />
        <ProtfolioItem img={require("../../assets/portfolio6.jpg")} />
      </div>
    </section>
  );
}

export default Portfolio;
