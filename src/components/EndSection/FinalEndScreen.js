import React, { useEffect, useState } from "react";
import "./FinalEndScreen.css";
import Heart from "../Heart";
import { QRCodeCanvas } from "qrcode.react";

const FinalEndScreen = () => {
  const fullText = "Thank you for visiting my portfolio";
  const [displayText, setDisplayText] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      const scrolled = (scrollTop + clientHeight) / scrollHeight;
      const normalized = Math.min(Math.max(scrolled, 0), 1);
      setProgress(normalized);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <div className="ending-container">
      <div className="ending-content">
        <span className="curly">{`{`}</span>
        <span className="typed-text">{displayText}</span>
        <span className="curly">{`}`}</span>
        {showHeart && <Heart />}
      </div>

      {/* QR Code + Button Section */}
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

        {/* New Glitch Animation Button */}
        <button className="ui-btn">
          <span>Restart Portfolio</span>
        </button>
      </div>
    </div>
  );
};

export default FinalEndScreen;
