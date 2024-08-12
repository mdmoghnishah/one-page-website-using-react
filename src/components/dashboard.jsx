// frontend/src/components/Dashboard.jsx

import React from 'react';

const Dashboard = ({ bannerState, setBannerState }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBannerState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleTimerChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setBannerState((prevState) => ({
      ...prevState,
      timer: isNaN(value) ? 0 : value,
    }));
  };

  return (
    <div className="dashboard">
      <h2>Banner Dashboard</h2>
      <label>
        Banner Description:
        <input
          type="text"
          name="description"
          value={bannerState.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Banner Link:
        <input
          type="text"
          name="link"
          value={bannerState.link}
          onChange={handleChange}
        />
      </label>
      <label>
        Banner Timer (seconds):
        <input
          type="number"
          name="timer"
          value={bannerState.timer}
          onChange={handleTimerChange}
        />
      </label>
      <label>
        Banner Visibility:
        <input
          type="checkbox"
          name="isVisible"
          checked={bannerState.isVisible}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Dashboard;
