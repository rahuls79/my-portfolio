import React, { Children } from "react";
import Section from "../Section";
import "./index.css";
import sneakersite from "../../assets/images/sneakersite.png";
import todolist from "../../assets/images/todolist.png";
import rps from "../../assets/images/rps.png";

const FeaturedWork = () => {
  return (
    <div className="featuredWorks">
      <div className="workHeading">
        <p id="featuredWorks">Featured Works</p>
      </div>
      <div className="projects">
        <div className="projectWork">
          <div className="projectDesc">
            <p id="projectHead">Sneaker Site Landing Page</p>
            <p id="projectData">
              Online shopping is a form of electronic commerce which allows
              consumers to directly buy goods or services from a seller over the
              Internet using a web browser or a mobile app. Created a simple
              landing page for a Sneaker Site, showcasing the different images
              for the product with the option to customise & the Cart Service
              which enables us to add multiple products to the cart.
            </p>
          </div>
          <div className="projectImg">
            <img src={sneakersite} alt="sneakersite" />
          </div>
        </div>
        <div className="projectWork">
          <div className="projectDesc">
            <p id="projectHead">TODO List Application</p>
            <p id="projectData">
              Worked on a Task Tracker Web Application - a To Do list, using
              React and it's hooks, with the feature to alternate between dark
              and light theme. This is a task management app to help you stay
              organized and manage your day-to-day. We can use the To Do app to
              make shopping lists or task lists, take notes, record collections,
              plan an event, or set reminders to increase your productivity
            </p>
          </div>
          <div className="projectImg">
            <img src={todolist} alt="todolist" />
          </div>
        </div>
        <div className="projectWork">
          <div className="projectDesc">
            <p id="projectHead">Rock, Paper & Scissors</p>
            <p id="projectData">
              Created a fairly competitive and responsive Rock, Paper and
              Scissors game with fair results & a simple rulebook - The familiar
              game of Rock, Paper, Scissors is played like this: at the same
              time, two players display one of three symbols: a rock, paper, or
              scissors. A rock beats scissors, scissors beat paper by cutting
              it, and paper beats rock by covering it.
            </p>
          </div>
          <div className="projectImg">
            <img src={rps} alt="rps" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
