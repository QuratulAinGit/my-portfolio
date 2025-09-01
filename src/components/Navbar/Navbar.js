import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from '../MobileNav/MobileNav';
import Linkedinbtn from "./LinkedInButton";
import InstagramButton from './InstagramButton';
import GmailButton from './GmailButton';
import PhoneButton from './PhoneButton';
import Github from './Github'; // <-- Import GitHub button

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  const handleHireMeClick = () => {
    setShowIcons(!showIcons);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="intro-title-row">
            <h2 className="intro-title"><span>Qurat Ul Ain</span></h2>
          </div>

          <ul className="nav-icons">
            {showIcons && (
              <>
                {/* Instagram */}
                <li>
                  <div className="tray-icon">
                    <a
                      href="https://www.instagram.com/develloop?igsh=OXluOWx2YTdkM2Ex"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramButton />
                    </a>
                  </div>
                </li>

                {/* LinkedIn */}
                <li>
                  <div className="tray-icon">
                    <a
                      href="https://www.linkedin.com/in/quratulain-soomro-0958aa223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedinbtn />
                    </a>
                  </div>
                </li>

                {/* GitHub */}
                <li>
                  <div className="tray-icon">
                    <a
                      href="https://github.com/QuratulAinGit" // <-- Replace with your GitHub link
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github />
                    </a>
                  </div>
                </li>

                {/* Gmail */}
                <li>
                  <div className="tray-icon">
                    <a href="mailto:anniesoomro21@gmail.com" target="_blank" rel="noreferrer">
                      <GmailButton />
                    </a>
                  </div>
                </li>

                {/* Phone */}
                <li>
                  <div className="tray-icon">
                    <a href="tel:+923001234567">
                      <PhoneButton />
                    </a>
                  </div>
                </li>
              </>
            )}

            {/* Hire Me Button */}
            <button className="contact-btn" onClick={handleHireMeClick}>
              Hire Me
            </button>
          </ul>

          <button
            className={`menu-btn ${openMenu ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
