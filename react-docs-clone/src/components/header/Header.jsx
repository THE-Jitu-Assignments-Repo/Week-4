import React from "react";
import "./header.css";


function Header() {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header--content--tag">
            <div className="header--content--tag--el">
              <h1 className="react-tag">REACT</h1>
              <p className="react-library">A JavaScript library for building user interfaces</p>
              <div className="header--content--button">
                <div className="header--content--start">
                  <a href="https://reactjs.org" alt="react" className="react-link">Get Started</a> 
                </div>
                <div className="header--content--tutorial">
                  <a href="https://reactjs.org" className="tutorial--react">Take the Tutorial</a><span> &gt;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
