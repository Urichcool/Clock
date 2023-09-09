import React, { useEffect } from 'react';
import AppClockSection from './App-clock-section/AppClockSection';
import AppClockMoreSection from './App-clock-more-section/AppClockMoreSection';
import { fetchQuote } from '../redux/app/operations';
import { useAppDispatch } from '../redux/hooks';



function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchQuote());
  }, [fetchQuote])
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
