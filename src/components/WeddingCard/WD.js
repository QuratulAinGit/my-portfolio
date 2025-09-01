import React from "react";
import "./CardComponent.css";

const CardComponent = () => {
  return (
    <div className="card">
      <a className="card1" href="#">
        <p>This is heading</p>
        <p className="small">
          Card description with lots of great facts and interesting details.
        </p>
        <div className="go-corner">
          <a className="go-arrow" href="https://example.com" target="_blank" rel="noopener noreferrer">
            →
          </a>
        </div>
      </a>
    </div>
  );
};

export default CardComponent;
