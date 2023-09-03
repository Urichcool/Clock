import React from 'react';
import AppClockSection from './App-clock-section/AppClockSection';
import AppBackground from './App-background/AppBackground';

function App() {
  return (
    <div className="App">
      <AppBackground/>
      <div className='container'>
        <AppClockSection/>
      </div>
    </div>
  );
}

export default App;
