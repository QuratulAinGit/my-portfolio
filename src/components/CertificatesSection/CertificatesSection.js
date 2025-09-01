import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './CertificatesSection.css';

// Assets
import optica from '../../themes/assets/optica.jpg';
import delegate from '../../themes/assets/delegate.jpg';
import GD from '../../themes/assets/GD.jpg';
import particiaption from '../../themes/assets/particiaption.jpg';
import imtic from '../../themes/assets/imtic.jpg';
import OGS from "../../themes/assets/OpticaGS.jpg"

const certificates = [
  { id: 1, title: "OPTICA APPRECIATION", img: optica },
  { id: 2, title: "MUETMUN 22", img: delegate },
  { id: 3, title: "GRAPHICS DESIGNING", img: GD },
  { id: 4, title: "ORGANIZING COUNCIL", img: particiaption },
  { id: 5, title: "Volunteer at IMTIC '23", img: imtic },
  { id: 6, title: "Optica General Secretory", img: OGS },
];

const CertificatesSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null); // modal ke liye index
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  // Modal helpers
  const openModal = useCallback((idx) => {
    setSelectedIndex(idx);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  }, [selectedIndex]);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev + 1) % certificates.length);
  }, [selectedIndex]);

  // Intersection for zoom effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
    return () => document.documentElement.classList.remove('no-scroll');
  }, [selectedIndex]);

  // Keyboard controls
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex, closeModal, goPrev, goNext]);

  // 3D tilt on desktop cards
  const handleCardMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 8;
    const rotateX = -((y - midY) / midY) * 6;
    el.style.setProperty('--rx', `${rotateX}deg`);
    el.style.setProperty('--ry', `${rotateY}deg`);
  };
  const handleCardLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
  };

  return (
    <div
      ref={containerRef}
      className={`certificates-section ${inView ? 'zoomed' : 'unzoomed'}`}
    >
      <h2 className="certificates-heading">Certificates</h2>

      {/* Desktop Grid */}
      <div className="certificates-grid">
        {certificates.map((cert, idx) => (
          <div
            key={cert.id}
            className="certificate-card"
            onClick={() => openModal(idx)}
            onMouseMove={handleCardMove}
            onMouseLeave={handleCardLeave}
            style={{
              transform: 'perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
            }}
          >
            <div className="certificate-image">
              <img src={cert.img} alt={cert.title} loading="lazy" />
            </div>
            <div className="certificate-title">{cert.title}</div>
            <span className="card-glare" />
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <div className="modal-backdrop-vignette" />
            <motion.div
              className="modal-content"
              initial={{ scale: 0.88, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={certificates[selectedIndex].title}
            >
              <div className="modal-header">
                <h3 className="modal-title">{certificates[selectedIndex].title}</h3>
                <button className="close-button" onClick={closeModal} aria-label="Close">×</button>
              </div>

              <div className="modal-media">
                <img
                  src={certificates[selectedIndex].img}
                  alt={certificates[selectedIndex].title}
                />
                <div className="media-glow" />
              </div>

              <div className="modal-controls">
                <button className="nav-btn" onClick={goPrev} aria-label="Previous">←</button>
                <button className="nav-btn" onClick={goNext} aria-label="Next">→</button>
              </div>

              <div className="modal-hints">
                <span>Use ← / → to navigate • Esc to close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificatesSection;
