import React, { useState } from 'react';
import './Navbar.css';
import MobileNav from '../MobileNav/MobileNav';
import Insta from "../../themes/assets/instagram.png";
import Linkedin from "../../themes/assets/linkedin.png";
import Gmail from "../../themes/assets/gmail.png";
import Phone from "../../themes/assets/phone-call.png";
import Linkedinbtn from "./LinkedInButton"
import InstagramButton from './InstagramButton';
import GmailButton from './GmailButton';
import PhoneButton from './PhoneButton';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleHireMeClick = () => {
    setShowIcons(!showIcons);
    setShowEmail(false);
    setShowPhone(false);
  };

  const toggleEmail = () => {
    setShowEmail(!showEmail);
    setShowPhone(false);
  };

  const togglePhone = () => {
    setShowPhone(!showPhone);
    setShowEmail(false);
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
                    <a href="https://www.instagram.com/develloop?igsh=OXluOWx2YTdkM2Ex" target="_blank" rel="noreferrer">
                     <InstagramButton/>
                    </a>
                  </div>
                </li>

                {/* LinkedIn */}
                <li>
                  <div className="tray-icon">
                    <a href="https://www.linkedin.com/in/sameersoomr" target="_blank" rel="noreferrer">
                    <Linkedinbtn/>
                    </a>
                  </div>
                </li>

                {/* Gmail */}
                <li>
                
                  <div className="tray-icon">
                    <a href="https://www.instagram.com/develloop?igsh=OXluOWx2YTdkM2Ex" target="_blank" rel="noreferrer">
                     <GmailButton/>
                    </a>
                  </div>
                </li>


                {/* Phone */}
               <li>
                
                  <div className="tray-icon">
            
                     <PhoneButton/>
                    
                  </div>
                </li>
              </>
            )}

            {/* Hire Me Button */}
            <button className="contact-btn" onClick={handleHireMeClick}>
              Hire Me
            </button>
          </ul>

          <button className={`menu-btn ${openMenu ? 'active' : ''}`} onClick={toggleMenu}>
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
