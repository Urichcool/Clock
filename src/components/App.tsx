import React from 'react';
import AppClockSection from './App-clock-section/AppClockSection';
import AppClockMoreSection from './App-clock-more-section/AppClockMoreSection';

function App() {
  return (
    <div className="app-background-day">
      <div className="container">
        <AppClockSection />
      </div>
      <AppClockMoreSection />
    </div>
  );
}

export default App;
