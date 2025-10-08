import {useState} from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [contactFormData, setContactFormData] = useState({name: "", email: "", phone: "", message: ""});
  function fillContactInfo(event){
    const {name, value} = event.target;
    setContactFormData((prevContactFormData) => ({...prevContactFormData, [name]: value}));//dynamically update the value based on the name
  }
  function submitContactForm(event){
    event.preventDefault();
    alert(`Contact form submitted: ${contactFormData.name}, ${contactFormData.email}, ${contactFormData.phone}, ${contactFormData.message}`);
    //send form to backend database
  }
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
          <form action="" onSubmit={submitContactForm}>
            <div className="contact-inputs">
              <input type="text" placeholder="Your Name" name="name" value={contactFormData.name} onChange={fillContactInfo}/>
              <input type="text" placeholder="Your Email" name="email" value={contactFormData.email} onChange={fillContactInfo}/>
              <input type="text" placeholder="Your Phone" name="phone" value={contactFormData.phone} onChange={fillContactInfo}/>
            </div>
            <div className="text-area">
              <textarea name="message" placeholder="Your Message" value={contactFormData.message} onChange={fillContactInfo}></textarea>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
