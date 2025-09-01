import React, { useState, useEffect } from "react";
import "./Mobileprofile.css";

export default function Mobileprofile() {
  const [accounts, setAccounts] = useState({
   instagram: { showRibbon: false, isActive: false },
  linkedin: { showRibbon: false, isActive: false },
  gmail: { showRibbon: false, isActive: false },
  phone: { showRibbon: false, isActive: false },
  github: { showRibbon: false, isActive: false },
  });

  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "Get in Touch";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleAccountClick = (accountType) => {
    setAccounts((prev) => {
      const currentAccount = prev[accountType];

      if (!currentAccount.showRibbon) {
        // First tap - show ribbon
        return {
          ...prev,
          [accountType]: { showRibbon: true, isActive: true },
        };
      } else {
        // Second tap - open link
        const links = {
        instagram: "https://instagram.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  gmail: "mailto:your.email@gmail.com",
  phone: "tel:+1234567890",
  github: "https://github.com/QuratulAinGit",
        };

        window.open(links[accountType], "_blank");

        return {
          ...prev,
          [accountType]: { showRibbon: false, isActive: false },
        };
      }
    });
  };

  const accountData = {
  instagram: {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    account: "@yourusername",
    color: "#E4405F",
  },
  linkedin: {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    account: "Quratulain Soomro",
    color: "#0077B5",
  },
  gmail: {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
    account: "anniesoomro21@gmail.com",
    color: "#EA4335",
  },
  phone: {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    account: "+923428322654",
    color: "#34A853",
  },
  github: {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="icon-svg">
        <path d="M12 0C5.37 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.465-2.38 1.235-3.22-.125-.303-.535-1.527.115-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.65.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.815 1.103.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .315.21.694.825.577C20.565 21.795 24 17.3 24 12c0-6.628-5.373-12-12-12z" />
      </svg>
    ),
    account: "QuratulAinGit",
    color: "#171515",
  },
};


  return (
    <div className="accounts-card">
      <div className="card-header">
        <h2 className="typewriter">
          {typewriterText}
          <span className="cursor">|</span>
        </h2>
      </div>

      <div className="accounts-column">
        {Object.entries(accountData).map(([key, data]) => {
          const account = accounts[key];

          return (
            <div key={key} className={`account-container ${key}`}>
              <button
                className={`account-button ${account.isActive ? "active" : ""}`}
                onClick={() => handleAccountClick(key)}
                style={{ "--accent-color": data.color }}
              >
                <span className="account-icon">{data.icon}</span>
                <div className="button-glow"></div>
              </button>

              <div className={`ribbon ${account.showRibbon ? "show" : ""}`}>
                <div className="ribbon-content">
                  <span className="ribbon-text">{data.account}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card-footer">
        <p className="footer-text">Tap to reveal • Tap again to connect</p>
      </div>
    </div>
  );
}
