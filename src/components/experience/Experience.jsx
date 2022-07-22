import React from "react";
import "./exp.css";
import Details from "./Details";
import { useGlobleContext } from "../../context/AppContext";

function Experience() {
  const { setActiveNav } = useGlobleContext();
  return (
    <section
      id="experience"
      onMouseOver={() => {
        setActiveNav("#experience");
      }}
    >
      <h5>what skill i have</h5>
      <h2>my experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>frontend Development</h3>
          <div className="experience__content">
            <Details title="hTHL" experienced="experienced" />
            <Details title="CSS" experienced="intermediate" />
            <Details title="javascript" experienced="experienced" />
            <Details title="bootstrip" experienced="experienced" />
            <Details title="React" experienced="experienced" />
            <Details title="Angular" experienced="intermediate" />
          </div>
        </div>

        <div className="experience__backend">
          <h3>backend Development</h3>
          <div className="experience__content">
            <Details title="Node.Js" experienced="experienced" />
            <Details title="Django" experienced="intermediate" />
            <Details title="MySQL" experienced="intermediate" />
            <Details title="MongoDB" experienced="experienced" />
          </div>
        </div>

        <div className="experience__python">
          <h3>Data scientist</h3>
          <div className="experience__content">
            <Details title="Python" experienced="experienced" />
            <Details title="Pandas" experienced="experienced" />
            <Details title="numpy" experienced="intermediate" />
            <Details title="sklearn" experienced="intermediate" />
            <Details title="matplotlib" experienced="experienced" />
            <Details title="Neural Networks" experienced="intermediate" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
