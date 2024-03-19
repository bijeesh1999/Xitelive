import React from "react";
import "./header.css"


function Header() {
  return (
    <>
      <header className="App-header">
        <div className="logo">LOGO</div>
        <div className="options">
          <ul>
            <li>The Story</li>
            <li>Flavours</li>
            <li>Upcomings</li>
            <li>On Demand</li>
            <li>FAQs</li>
          </ul>
          <button className="contactUs">Contact Us</button>
          <div className="company">
            TRENT
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
