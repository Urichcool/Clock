import React, { useEffect } from "react";
import AppClockSection from "./App-clock-section/AppClockSection";
import AppClockMoreSection from "./App-clock-more-section/AppClockMoreSection";
import { fetchQuote } from "../redux/app/operations";
import { useAppDispatch } from "../redux/hooks";
import { fetchTime } from "../redux/clock/operations";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setInterval(() => {
      dispatch(fetchTime());
    }, 1000);

    dispatch(fetchQuote());
  }, [dispatch]);
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
