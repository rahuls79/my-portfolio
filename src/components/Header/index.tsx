import React from "react";
import "./index.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="hero-header">
          <div className="hero-header-logo">
            <h3 id="home">FRONT END DEVELOPER</h3>
          </div>
          <div className="hero-header-btns">
            <a href="#home">
              <button className="nav-btn">Home</button>
            </a>
            <a href="#featuredWorks">
              <button className="nav-btn">Work</button>
            </a>
            <a href="#aboutMe">
              <button className="nav-btn">About</button>
            </a>
            <a href="#contactMe">
              <button className="nav-btn">Contact</button>
            </a>
          </div>
        </div>
        <div className="burgerMenu">
          <section className="p-menu1">
            <nav id="navbar" className="navigation" role="navigation">
              <input id="toggle1" type="checkbox" />
              <label className="hamburger1" htmlFor="toggle1">
                <div className="top"></div>
                <div className="meat"></div>
                <div className="bottom"></div>
              </label>

              <nav className="menu1">
                <a className="link1" href="#home">
                  Home
                </a>
                <a className="link1" href="#featuredWorks">
                  Work
                </a>
                <a className="link1" href="#aboutMe">
                  About
                </a>
                <a className="link1" href="#contactMe">
                  Contact
                </a>
              </nav>
            </nav>
          </section>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
