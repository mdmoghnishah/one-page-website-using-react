// frontend/src/components/Banner.jsx

import React, { useState, useEffect } from 'react';

const Banner = ({ bannerState }) => {
  const [timer, setTimer] = useState(bannerState.timer);

  useEffect(() => {
    setTimer(bannerState.timer);
  }, [bannerState.timer]);

  useEffect(() => {
    if (bannerState.isVisible && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [bannerState.isVisible, timer]);

  if (timer <= 0) return null; // Hide banner when timer reaches zero

  return (
    <div className="banner">
      <p>{bannerState.description}</p>
      {bannerState.link && (
        <a href={bannerState.link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      )}
      <p>Time remaining: {timer}s</p>
    </div>
  );
};

export default Banner;
