import React, { useEffect, useState } from "react";
import "./FinalEndScreen.css";
import Heart from "../Heart";
import { QRCodeCanvas } from "qrcode.react";

const FinalEndScreen = () => {
  const fullText = "Thank you for visiting my portfolio";
  const [displayText, setDisplayText] = useState("");
  const [progress, setProgress] = useState(0);

  // Handle scroll to calculate progress (iOS compatible)
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const scrolled = (scrollTop + vh) / scrollHeight;
      setProgress(Math.min(Math.max(scrolled, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typewriter animation based on scroll progress
  useEffect(() => {
    const startTyping = 0.7; // 70%
    const finishTyping = 1; // 100%
    const startRemoving = 0.9; // 90%

    if (progress <= startTyping) {
      setDisplayText("");
    } else if (progress >= finishTyping) {
      setDisplayText(fullText);
    } else if (progress > startRemoving) {
      const ratio = (progress - startRemoving) / (finishTyping - startRemoving);
      const lettersToShow = Math.floor(fullText.length * ratio);
      setDisplayText(fullText.slice(0, lettersToShow));
    } else {
      const ratio = (progress - startTyping) / (finishTyping - startTyping);
      const lettersToShow = Math.floor(fullText.length * ratio);
      setDisplayText(fullText.slice(0, lettersToShow));
    }
  }, [progress]);

  const showHeart = progress >= 0.7 && displayText.length > 0;

  // Restart Portfolio button handler (iOS smooth scroll fix)
  const handleRestart = () => {
    setProgress(0);
    setDisplayText("");
    setTimeout(() => {
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.scrollTo(0, 0); // fallback
      }
    }, 50);
  };

  return (
    <div className="ending-container">
      <div className="ending-content">
        <span className="curly">{`{`}</span>
        <span className="typed-text">{displayText}</span>
        <span className="curly">{`}`}</span>
        {showHeart && <Heart />}
      </div>

      <div className="qr-button-section">
        <div className="qr-block">
          <p className="qr-text">Scan to download my CV</p>
          <QRCodeCanvas
            value="https://drive.google.com/file/d/11_BztCD8aiXTBWOc5LAKjaDwENRPe0_S/view?usp=sharing"
            size={120}
            bgColor="#ffffff"
            fgColor="#e63946"
            includeMargin={true}
          />
        </div>

        <button className="ui-btn" onClick={handleRestart}>
          <span>Restart Portfolio</span>
        </button>
      </div>
    </div>
  );
};

export default FinalEndScreen;
