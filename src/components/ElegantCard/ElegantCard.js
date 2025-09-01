import React, { useState } from "react";
import "./ElegantCard.css";

export default function ElegantCard({ title, description, link }) {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    // Only enable this on mobile (max-width: 768px)
    if (window.innerWidth <= 768) {
      setIsActive((prev) => !prev);
    }
  };

  return (
    <div
      className={`animated-card ${isActive ? "active" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="hover-text">HOVER FOR MORE INFORMATION</p>

        <div className="card-details">
          <p className="card-description">{description}</p>
          <a
            href={link}
            className="card-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="arrow-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
