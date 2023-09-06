import React from 'react';
import AppClockSection from './App-clock-section/AppClockSection';
import AppClockMoreSection from './App-clock-more-section/AppClockMoreSection';
import { useAppSelector } from '../redux/hooks';
import { selectMoreSwitcher } from '../redux/app/appSlice';

function App() {
  const isMoreOpen = useAppSelector(selectMoreSwitcher)
 
  return (
    <div className="app-background-day">
      <div className="container">
        <AppClockSection />
      </div>
      {isMoreOpen && <AppClockMoreSection />}
    </div>
  );
}

export default App;
