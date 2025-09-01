import React, { useRef, useEffect, useState } from "react";
import ElegantCard from "../ElegantCard/ElegantCard";
import "./Projects.css";

const projects = [
  {
    title: "5G Patch Antenna at 28 GHz",
    description:
      "Design and simulation of a 28 GHz patch antenna optimized for 5G applications.",
    link: "https://ieeexplore.ieee.org/document/8710417",
  },
  {
    title: "Radar System using Arduino UNO",
    description:
      "A working radar prototype built with Arduino and ultrasonic sensors for distance detection.",
    link: "https://projecthub.arduino.cc/hashan_sudeera/radar-system-using-arduino-dedc7d",
  },
  {
    title: "Car Speed Detector using Arduino Board",
    description:
      "Measures real-time car speed using IR sensors and Arduino board for traffic monitoring.",
    link: "https://share.google/p4aSYp3PE6tgd7lYu",
  },
  {
    title: "Calculator Using C++(BASIC)",
    description:
      "A simple command-line calculator built in C++ with basic arithmetic operations.",
    link: "https://stackoverflow.com/questions/72702243/creating-a-very-basic-calculator-in-c",
  },
  {
    title: "Blurring Image with Moving Average Filter",
    description:
      "Image processing technique using moving average filter for smooth blur effects.",
    link: "#https://www.sciencedirect.com/topics/engineering/moving-average-filter#:~:text=The%20moving%2Daverage%20filter%2C%20which,is%20actually%20a%20linear%20convolution.",
  },
  {
    title: "Advancing Secure Communication: Noise",
    description:
      "Exploring noise-based encryption techniques for secure and robust data transmission.",
    link: "https://ieeexplore.ieee.org/document/6287491",
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger on every enter/leave
        if (entry.isIntersecting) {
          setInView(true); // zoom in
        } else {
          setInView(false); // zoom out
        }
      },
      { threshold: 0.4 } // triggers when 40% of element is visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`projects-wrapper ${inView ? "zoomed" : "unzoomed"}`}
    >
      <h1 className="projects-heading">PROJECTS</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ElegantCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
