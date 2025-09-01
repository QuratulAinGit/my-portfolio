import React, { useState, useEffect, useRef } from "react";
import "./SandBatteryCard.css";
import sandImage from "../../themes/assets/17806.jpg";

export default function SandBatteryCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Scroll Zoom Logic
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        sectionRef.current.classList.add("zoom-in");
        sectionRef.current.classList.remove("zoom-out");
      } else {
        sectionRef.current.classList.add("zoom-out");
        sectionRef.current.classList.remove("zoom-in");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sand-container">
      {/* Section Layout */}
      <div className="sand-section" ref={sectionRef}>
        {/* Left Text */}
        <div className="sand-text">
          <h1>FINAL YEAR PROJECT</h1>
          <p>
            A sustainable energy storage solution using heated sand to store
            renewable power for long durations.
          </p>
        </div>

        {/* Card */}
        <div
          className="sand-card"
          style={{ backgroundImage: `url(${sandImage})` }}
        >
          <div className="sand-card-overlay">
            <h2 className="sand-card-title">Sand Battery</h2>
            <p className="sand-card-desc">
              Thermal energy storage using heated sand for sustainable power solutions.
            </p>
            <div className="sand-btn-row">
              <button className="sand-primary-btn" onClick={openModal}>
                OUR WORK
              </button>
              <a
                href="https://polarnightenergy.com/sand-battery/"
                target="_blank"
                rel="noopener noreferrer"
                className="sand-secondary-btn"
              >
                INSPIRATION
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div className="sand-modal">
          <div className="sand-modal-content">
            <div className="sand-modal-header">
              <h2>SAND BATTERY</h2>
              <button className="sand-close-btn" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="sand-modal-body">
              <p>
                The rising global demand for renewable energy has 
                created an urgent need for new energy-saving solutions
                 that increase efficiency and effectiveness. Renewable energy,
                  although abundant and environmentally friendly, faces the 
                  challenge of continuous supply and storage.
              </p>
              <p>
               Our project addresses these problems by introducing sand batteries,
                a thermal energy storage system designed to optimize the use of renewable energy.
                 This technology uses the special properties of sand to deliver an efficient,
                  economical, and environmentally friendly solution for storing and using energy.
              </p>
              <p>
               At the core of the system is a heating rod that transfers thermal energy to the sand stored in an insulated box.
                Sand has a unique ability to store heat for long periods of time, 
                allowing it to store energy effectively and at a temperature adequate for many applications.
              </p>
              <p>
                When heated, the reserved thermal energy can be utilized directly for heating or industrial processes.
                 It can also be converted into electricity by a thermoelectric generator, demonstrating the efficiency of this new energy solution.
              </p>
              <p>
                Sand is abundant, inexpensive, and versatile, making it an ideal material for thermal energy storage systems.
                 Unlike traditional electronic devices that rely on rare or expensive materials, sand batteries offer a sustainable and scalable solution.
              </p>
              <p>
                The use of insulated boxes further reduces heat loss, saving energy over a long period of time.
                 Sand batteries can capture and store excess energy generated during periods of high power generation,
                  providing consistent and reliable power during periods of low generation or high demand.
              </p>
              <p>
                This ability to ensure a sustainable energy supply aligns with the global objective of reducing dependence on fossil fuels and cutting carbon emissions.
                 They can be applied on a large scale, such as commercial or grid-level energy storage, or on smaller scales, like home heating and local solutions.
              </p>
              <p>
                The adaptability of sand batteries makes them especially useful in remote or inaccessible places where other forms of electricity supply are not readily available. They hold significant potential for the energy storage industry.
              </p>
              <p>
                Sand batteries are leading the world toward clean and green energy through
                 their sustainable, cost-effective, and reliable solution.
                  By relying on easily available renewable energy sources, 
                  they present a powerful tool for solving energy problems in both developed and developing regions.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
