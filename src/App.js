import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import SkillsSection from "./components/Skills/SkillsSection";
import Projects from "./components/Projects/Projects";
import SandBatteryCard from './components/Finalyear/SandBatteryCard';
import CertificatesSection from "./components/CertificatesSection/CertificatesSection";
import EndSection from "./components/EndSection/FinalEndScreen";

import "./App.css";

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Disable scroll initially
    document.body.style.overflow = "hidden";

    // Show rest of content and enable scroll after intro animations
    const timer = setTimeout(() => {
      setShowContent(true);
      document.body.style.overflow = "auto";
    }, 4000); // Matches total animation time of Intro

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Intro />
        {showContent && (
          <>
            <SkillsSection />
            <Projects />
            <SandBatteryCard />
            <CertificatesSection />
            <EndSection />
       
           
          </>
        )}
      </div>
    </>
  );
};

export default App;
