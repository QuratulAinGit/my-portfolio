import React from "react";
import "./GmailButton.css";

const GmailButton = () => {
  return (
    <button className="Btn gmail-btn">
      <svg
        className="svgIcon"
        viewBox="0 0 512 512"
        height="25"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M502.3 190.8 327.4 338.3c-18.5 15.9-45.2 15.9-63.6 0L9.7 190.8C3.8 185.5 0 177.9 0 170v256c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V170c0 7.9-3.8 15.5-9.7 20.8z"
          fill="#fff"
        />
        <path
          d="M464 64H48C21.5 64 0 85.5 0 112v58.6c0 7.1 3.8 14.6 9.7 20L256 341.3l246.3-150.7c5.9-5.4 9.7-12.9 9.7-20V112c0-26.5-21.5-48-48-48z"
          fill="#EA4335"
        />
      </svg>
      <span className="text">anniesoomro21</span>
    </button>
  );
};

export default GmailButton;
