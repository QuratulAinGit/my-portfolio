import React from "react";
import "./MobileNav.css";
import logo from "../../themes/assets/logo.png";
import Insta from "../../themes/assets/instagram.png";
import Github from "../../themes/assets/github.png";
import Mobprofile from "../Mobprofile/Mobileprofile"

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      {/* Close Menu Button */}
      <button className="close-btn" onClick={toggleMenu}>
      </button>

      <div className="Mobprofile">
        <Mobprofile/>
      </div>
    </div>
  );
};

export default MobileNav;
