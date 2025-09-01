import React, { useState, useRef, useEffect } from 'react';
import './SkillsSection.css';

const skillsInfo = {
  'Graphic Designing': 'I have completed a 6-month graphic designing course from Awais Institute, Hyderabad Pakistan. I now create designs using Adobe Illustrator, Photoshop, and Canva. I passed the course\u00a0with\u00a0an\u00a0A\u00a0grade',
  'Fiber Splicing': 'I completed a 5-week internship at the National Telecommunication Corporation (NTC), Hyderabad. During this internship, I learned fiber splicing and gained valuable practical knowledge. I acquired experience in the following areas. Studying the operations and functionalities of NGN Exchanges. Learning the basics of transmission and Huawei DWDM equipment.Installation and study of IP Networks.Working with and studying the OSP Network at the Phones Division, Hyderabad.Learning about the history and overview of NTC.Based on the assessment by the Officer Incharge, I was awarded Grade A. ',
  'React Native': 'I learned React Native from YouTube tutorials and built multiple cross-platform apps.',
  'C / C++': 'C and C++ were part of my university coursework and I practiced them through coding challenges.',
  'MATLAB': 'I used MATLAB for simulations and lab tasks in Control Systems and DSP courses.',
  'LaTeX': 'I learned LaTeX through Overleaf and used it for documentation in academic projects.',
  'Collaboration & Teamwork': 'I practiced collaboration during team-based projects and leadership roles.',
  'Social Media Marketing': 'I managed event promotions on Instagram and Facebook for university societies.',
  'Volunteership': 'Volunteered in technical events and student chapters, helping in logistics and management.'
};

const SkillsSection = () => {
  const [modalInfo, setModalInfo] = useState({ open: false, title: '', description: '' });
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  const openModal = (title) => {
    setModalInfo({ open: true, title, description: skillsInfo[title] || "Details not available." });
  };

  const closeModal = () => {
    setModalInfo({ open: false, title: '', description: '' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={`skills-section ${inView ? 'zoomed' : 'unzoomed'}`}
      >
        {/* SKILLS CONTENT */}
        {/* Row 1 */}
        <div className="skills-row">
          <div className="section-block">
            <h2 className="section-heading">QUALITY</h2>
            <div className="skills-glass-card">
              <h3>Leadership Experience</h3>
              <ul>
                <li>General Secretary – Optica Student Chapter, MUET</li>
                <li>Vice President – IEEE Women in Engineering Student Chapter, MUET</li>
                <li>Team Leader – Final Year Project (Sand Battery)</li>
                <li>Social Media Coordinator – IEEE MTT-S Student Chapter, MUET</li>
              </ul>
            </div>
          </div>
          <div className="section-block">
            <h2 className="section-heading">SKILLS</h2>
            <div className="skills-glass-card">
              <div className="card-items">
                <div className="mini-card" onClick={() => openModal('Graphic Designing')}>Graphic Designing</div>
                <div className="mini-card" onClick={() => openModal('Fiber Splicing')}>Fiber Splicing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="skills-row">
          <div className="section-block">
            <h2 className="section-heading">CODING SKILLS</h2>
            <div className="skills-glass-card">
              <div className="card-items">
                <div className="mini-card" onClick={() => openModal('React Native')}>React Native</div>
                <div className="mini-card" onClick={() => openModal('C / C++')}>C / C++</div>
                <div className="mini-card" onClick={() => openModal('MATLAB')}>MATLAB</div>
                <div className="mini-card" onClick={() => openModal('LaTeX')}>LaTeX</div>
              </div>
            </div>
          </div>

          <div className="section-block">
            <h2 className="section-heading">OTHERS</h2>
            <div className="skills-glass-card">
              <div className="card-items">
                <div className="mini-card" onClick={() => openModal('Collaboration & Teamwork')}>Collaboration & Teamwork</div>
                <div className="mini-card" onClick={() => openModal('Social Media Marketing')}>Social Media Marketing</div>
                <div className="mini-card" onClick={() => openModal('Volunteership')}>Volunteership</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalInfo.open && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="close-btn" onClick={closeModal}>×</button>
            <h2>{modalInfo.title}</h2>
            <p>{modalInfo.description}</p>
          </div>
        </div>
      )}
      <div className="line-separator"></div>
    </>
  );
};

export default SkillsSection;
