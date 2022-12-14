import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <a href="/#">movies</a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/#">watch list</a>
          </li>
          <li>
            <a href="/#">watched</a>
          </li>
          <li>
            <a className="btn" href="/#">
              app
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
