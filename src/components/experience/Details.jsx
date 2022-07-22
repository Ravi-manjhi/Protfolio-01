import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

function Details({ title, experienced }) {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="icon" />
      <div>
        <h4>{title}</h4>
        <small className="text-light">{experienced}</small>
      </div>
    </article>
  );
}

export default Details;
