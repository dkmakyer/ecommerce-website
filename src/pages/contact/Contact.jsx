import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-details">
          <div className="call-us">
            <h4>
              <FontAwesomeIcon className="contact-icon" icon={faPhone} /> Call
              To Us
            </h4>
            <p>We are available 24/7, 7 days a week</p>
            <p>
              Phone: <span style={{ fontWeight: "800" }}>+233241322622</span>
            </p>
          </div>
          <div className="write-to-us">
            <h4>
              <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />{" "}
              Write To Us
            </h4>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>
              Email:{" "}
              <span style={{ fontWeight: "800" }}>
                customersupport@agbogbloshie.com
              </span>
            </p>
          </div>
        </div>
        <div className="contact-form">
          <form action="">
            <div className="inputs">
              <input type="text" placeholder="Your Name" name="name" />
              <input type="text" placeholder="Your Email" name="email" />
              <input type="text" placeholder="Your Phone" name="phone" />
            </div>
            <div className="text-area">
              <textarea name="message" placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
