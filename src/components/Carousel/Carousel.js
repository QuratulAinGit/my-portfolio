import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';

const InfiniteCarousel = ({ baseWidth = 300, speed = 0.5, pauseOnHover = true, children }) => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate children for seamless looping
  const items = [...React.Children.toArray(children), ...React.Children.toArray(children)];

  useEffect(() => {
    let animationId;
    let position = 0;

    const step = () => {
      if (!isHovered) {
        position -= speed; // move left by `speed` pixels per frame
        if (trackRef.current) {
          const trackWidth = trackRef.current.scrollWidth / 2; // half, because we duplicated items
          if (-position >= trackWidth) position = 0; // reset to start
          trackRef.current.style.transform = `translateX(${position}px)`;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [speed, isHovered]);

  return (
    <div
      className="infinite-carousel-wrapper"
      ref={wrapperRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="infinite-carousel-track" ref={trackRef}>
        {items.map((child, idx) => (
          <div className="infinite-carousel-item" key={idx} style={{ width: `${baseWidth}px` }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
