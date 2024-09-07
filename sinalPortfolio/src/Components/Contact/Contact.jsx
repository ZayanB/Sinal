import React from "react";
import "./Contact.css";
import { PiPhone, PiEnvelope } from "react-icons/pi";

const Contact = () => {
  return (
    <section id="contact-me">
      <div className="Contact-Main-Container">
        <div className="Contact-Me">Contact Me!</div>
        <div className="Contact-Methods">
          <div className="contact-phone">
            <div>
              <PiPhone size={32} />
            </div>
            <div>+961 76 310 720</div>
          </div>
          <div className="contact-email">
            <div>
              <PiEnvelope size={32} />
            </div>
            <div>sinal_breish@outlook.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
