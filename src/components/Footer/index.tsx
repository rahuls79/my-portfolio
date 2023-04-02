import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="myDetails">
        <h3>Rahul Sinha</h3>
        {/* <div className="myDetails-data"> */}
        <p>ReactJS Developer</p>
        <p>Pune, Maharashtra - 411057</p>
        <p>+91 9958738937</p>
        <p>Resume</p>
        {/* </div> */}
      </div>
      <div className="myWork">
        <h3>My work</h3>
        {/* <div className="myWork-data"> */}
        <p>TODO List</p>
        <p>Sneaker Site Landing Page</p>
        <p>Rock, Paper & Scissor Game</p>
        <p>News Homepage Landing Site</p>
        {/* </div> */}
      </div>
      <div className="socialMedia">
        <h3>Social Media</h3>
        {/* <div className="socialMedia-details"> */}
        <a href="https://github.com/rahuls79">
          <p>Github</p>
        </a>
        <a href="https://www.linkedin.com/in/rahul-sinha-876244188/">
          <p>LinkedIn</p>
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmmDLSnGcKpWvQXggwpBTfNbHMNBPlSkSnzRCdmzDwVjKMfLcLqPrffGFtlxlVHnxQlGbZ">
          <p>Gmail</p>
        </a>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Footer;
