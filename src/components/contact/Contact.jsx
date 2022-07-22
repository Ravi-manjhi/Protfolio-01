import React from "react";
import { useGlobleContext } from "../../context/AppContext";
import ContactElement from "./ContactElement";
import "./contact.css";
// import { useMailContext } from "../../context/mail";

function Contact() {
  const { setActiveNav } = useGlobleContext();

  return (
    <section id="contact" onMouseOver={() => setActiveNav("#contact")}>
      <h5>get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <ContactElement />
     
      </div>
    </section>
  );
}

export default Contact;
