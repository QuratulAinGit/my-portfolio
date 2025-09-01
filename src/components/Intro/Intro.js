import React, { useEffect, useState } from 'react';
import './Intro.css';

const Intro = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 2500); // 2.5s = duration of typewriter effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="intro-container">
      <div className="top-row">
        <h1 className="intro-heading">
          Hi <span className="wave">👋</span> I am{' '}
          <span className="name-glow">QuratulAin Soomro</span>
        </h1>

        {showWelcome && (
          <p className="welcome-text">Welcome to my portfolio!</p>
        )}

        {showWelcome && (
          <p className="original-intro-text">
            Driven by a strong passion for technology and innovation, I hold a{' '}
            <span className="highlight">Bachelor's degree in Telecommunication Engineering</span>{' '}
            from{' '}
            <a
              href="https://www.muet.edu.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              MEHRAN UNIVERSITY OF ENGINEERING AND TECHNOLOGY (MUET), Jamshoro
            </a>{' '}
            and am currently pursuing a{' '}
            <span className="highlight">Master's in Information Technology</span>{' '}
            at{' '}
            <a
              href="https://nust.edu.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link"
            >
              NATIONAL UNIVERSITY OF SCIENCE AND TECHNOLOGY (NUST), Islamabad
            </a>{' '}
            . My academic journey, combined with hands-on project experience, has equipped me with practical and innovative strategies to enhance the fields of{' '}
            <span className="highlight">Telecommunications</span> and{' '}
            <span className="highlight">IT</span>. With a solid foundation in{' '}
            <span className="highlight">Optical Fiber</span> and{' '}
            <span className="highlight">Networking</span>, I am eager to apply these skills to real-world challenges. Motivated by curiosity and a commitment to continuous growth, I am dedicated to refining my expertise and contributing meaningfully to dynamic and challenging roles in the{' '}
            <span className="highlight">tech industry</span>.
          </p>
        )}
      </div>
    </section>
  );
};

export default Intro;
