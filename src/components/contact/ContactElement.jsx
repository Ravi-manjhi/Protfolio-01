import React from "react";
import { FaFacebookMessenger, FaGoogle, FaWhatsapp } from "react-icons/fa";

const ContactElement = () => {
  return (
    <>
      <div className="contact__options">
        <div className="contact__option">
          <FaGoogle className="icon" />
          <h4>email</h4>
          <h5>ravi.manjhi199@gmail.com</h5>
          <a href="mailto:ravi.manjhi199@gmail.com">Send A Message</a>
        </div>
        <div className="contact__option">
          <FaFacebookMessenger className="icon" />
          <h4>facebook</h4>
          <h5>ravi manjhi</h5>
          <a href="https://m.me/ravi.manjhi">Send A Message</a>
        </div>
        <div className="contact__option">
          <FaWhatsapp className="icon" />
          <h4>WhatApp</h4>
          <h5>Ravi manjhi</h5>
          <a href="https://api.whatsapp.com/send?phone=9755775044">
            Send A Message
          </a>
        </div>
      </div>
      <div>
        <form>
          <input type="name" placeholder="Your full name" required />
          <input type="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactElement;
