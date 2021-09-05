import React from 'react'
import "./contact.css";
function Contact() {
    return (
        <div className="contact">
        <label className="section-title">Contact</label>
        <div className="contact-container">
          <div className="contact-left">
          <p>For more contact details download my resume.Phone-+918543562312</p>


          </div>
          <div className="download">
            <a download href={require("../../../assets/r.pdf").default}> <i class="fi-rr-download"></i>Download Resume</a>
          </div>
        </div>
       
        </div>
    );
}

export default Contact;
