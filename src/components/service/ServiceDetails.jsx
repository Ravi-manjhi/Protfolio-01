import React, { useState, useEffect } from "react";
import { BiCheck } from "react-icons/bi";

function ServiceDetails({ title, contents }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (contents) {
      setContent(contents);
    }
  }, [contents]);

  return (
    <article className="service">
      <div className="service__head">
        <h3>{title}</h3>
      </div>
      <ul className="service__list">
        {content.map((item, index) => {
          return (
            <li key={index}>
              <BiCheck className="service__list-icon" />
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

export default ServiceDetails;
