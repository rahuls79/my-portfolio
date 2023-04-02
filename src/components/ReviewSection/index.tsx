import React from "react";
import "./index.css";

const ReviewSection = () => {
  return (
    <div className="reviewSection">
      <h2>Testimonials</h2>
      <div className="reviewForm">
        <div className="reviewFrom-heading">
          <p>Write a feedback</p>
        </div>
        <div className="reviewForm-inputs">
          <input type="email" placeholder="Enter Email"></input>
          <textarea placeholder="Feel free to write me a review"></textarea>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ReviewSection;
