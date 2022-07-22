import React from "react";

const ProtfolioItem = ({ img, links }) => {
  return (
    <article className="protfolio__item">
      <div className="portfolio__item-img">
        <img src={img} alt="project-img-jpg" width="100%" />
      </div>
      <h3>this is Projects title</h3>
      <div className="protfolio__item-cta">
        <a href="https://github.com/" className="btn" target="blank">
          Github
        </a>
        <a
          href="https://dribble.com/Alien_pixel"
          className="btn btn-primary"
          target="blank"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default ProtfolioItem;
