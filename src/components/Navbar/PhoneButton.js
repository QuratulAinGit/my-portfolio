import React from 'react';
import './PhoneButton.css';

const PhoneButton = () => {
  return (
    <button className="Phone-Btn">
      <svg
        viewBox="0 0 24 24"
         height="1.5em"
        xmlns="http://www.w3.org/2000/svg"
        className="Phone-svgIcon"
      >
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 
          19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 
          2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72 
          12.05 12.05 0 0 0 .57 2.57 
          2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27 
          a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.57.57 
          A2 2 0 0 1 22 16.92z"
        />
      </svg>
      <span className="Phone-text">+92-3163903740</span>
    </button>
  );
};

export default PhoneButton;
