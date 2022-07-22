import React from "react";

const ArticleTestimonial = ({ img, name }) => {
  return (
    <article className="testimonial">
      <div className="client__avatar">
        <img src={img} alt="client-img.jpg" width="100%" />
      </div>
      <h5 className="client__name">{name}</h5>
      <small className="client__review">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        quisquam expedita itaque unde temporibus tempore nihil assumenda nemo
        quos facere fugiat ipsa, amet, saepe debitis commodi perspiciatis, natus
        ad et!
      </small>
    </article>
  );
};

export default ArticleTestimonial;
