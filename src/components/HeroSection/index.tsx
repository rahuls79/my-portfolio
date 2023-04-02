import React from "react";
import "./index.css";
import profileImage from "../../assets/images/profileimg.jpeg";
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/github.png";
import gmail from "../../assets/images/gmail.png";
import Section from "../Section";

function HeroSection() {
  return (
    <Section>
      <div className="hero-profile-data">
        <div className="hero-profile-dataHead">
          <p>Hi! I'm Rahul,I design and develop things for the web.</p>
        </div>
        <div className="hero-profile-dataDesc">
          <p id="aboutMe">
            Detail-Oriented Developer, playing around with HTML, CSS, JavaScript
            & ReactJS. Highly adept at both independent and collaborative
            projects, with an emphasis on landing pages and website development.
          </p>
        </div>
        <div className="hero-profile-dataContact">
          <a href="https://www.linkedin.com/in/rahul-sinha-876244188/">
            <img src={linkedin} />
          </a>
          <a href="https://github.com/rahuls79">
            <img src={github} />
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmmDLSnGcKpWvQXggwpBTfNbHMNBPlSkSnzRCdmzDwVjKMfLcLqPrffGFtlxlVHnxQlGbZ">
            <img src={gmail} id="gmail" />
          </a>
        </div>
      </div>
      <div className="hero-profile-img">
        <img src={profileImage} alt="profileimg" />
      </div>
    </Section>
  );
}

export default HeroSection;
