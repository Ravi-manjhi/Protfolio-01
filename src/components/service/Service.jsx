import React from "react";
import "./service.css";
import { useGlobleContext } from "../../context/AppContext";
import ServiceDetails from "./ServiceDetails";

function Service() {
  const { setActiveNav, service } = useGlobleContext();
  return (
    <section
      id="services"
      onMouseOver={() => {
        setActiveNav("#services");
      }}
    >
      <h5>what i offer</h5>
      <h2>Skills</h2>
      <div className="container services__container">
        {service.map((el, index) => {
          const { title, contents } = el;
          return (
            <ServiceDetails key={index} title={title} contents={contents} />
          );
        })}
      </div>
    </section>
  );
}

export default Service;
