// frontend/src/App.jsx

import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import axios from 'axios';

function App() {
  const [bannerState, setBannerState] = useState({
    isVisible: true,
    description: '',
    timer: 0,
    link: '',
  });

  useEffect(() => {
    // Fetch banner details from the backend
    axios.get('http://localhost:5000/api/banner')
      .then(response => {
        setBannerState(response.data);
      })
      .catch(error => console.error('Error fetching banner data:', error));
  }, []);

  const updateBannerState = (newState) => {
    setBannerState(newState);
    // Update banner details in the backend
    axios.put('http://localhost:5000/api/banner', newState)
      .then(() => console.log('Banner updated successfully'))
      .catch(error => console.error('Error updating banner:', error));
  };

  return (
    <div className="app">
      <h1>My Dashboard</h1>
      <Dashboard bannerState={bannerState} setBannerState={updateBannerState} />
      {bannerState.isVisible && <Banner bannerState={bannerState} />}
    </div>
  );
}

export default App;
