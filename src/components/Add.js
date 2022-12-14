import React from "react";
import "./Add.css";

const Add = () => {
  return (
    <div className="dd-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input type="text" placeholder="search for a movie" />
          </div>
          <ul className="results"></ul>
        </div>
      </div>
    </div>
  );
};

export default Add;
