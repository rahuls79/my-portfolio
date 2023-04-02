import React, { useState } from "react";
import "./index.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setSubject("");
    setEmail("");
    setMessage("");
    console.log("prevented");

    emailjs
      .sendForm(
        "service_x7drypv",
        "template_5a4gqbw",
        e.target,
        "we7nDZZ3gkwlZ3EVV"
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="contactMe">
      <div className="contactHeading">
        <p id="contactMe">Let's work together?</p>
      </div>
      <div className="contactDetails">
        <form onSubmit={sendEmail}>
          <div className="name">
            <div className="firstName">
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
              />
            </div>
            <div className="lastName">
              <input
                type="text"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="contact">
            <div className="subject">
              <input
                type="e"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="email">
              <input
                type="text"
                id="email"
                value={email}
                name="userEmail"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
            </div>
          </div>
          <div className="message">
            <textarea
              placeholder="Leave a comment"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              text-align="left"
            />
          </div>
          <div className="submitBtn">
            <button id="submit-btn" type="submit">
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
