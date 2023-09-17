import React, { useEffect} from "react";
import AppClockSection from "./App-clock-section/AppClockSection";
import AppClockMoreSection from "./App-clock-more-section/AppClockMoreSection";
import { fetchQuote } from "../redux/app/operations";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchLocation, fetchTime } from "../redux/clock/operations";
import { isDaySwitcher, selectIsDay } from "../redux/app/appSlice";
import { selectTime } from "../redux/clock/clockSlice";
import { timeFunc } from "../utils/timeFunc";
import { ThreeDots } from "react-loader-spinner";
import { isDayFunc } from "../utils/isDayFunc";

function App() {
  const dispatch = useAppDispatch();
  const { time } = useAppSelector(selectTime);
  const isDay = useAppSelector(selectIsDay);


  useEffect(() => {
    dispatch(fetchLocation());
    dispatch(
      isDaySwitcher(
       isDayFunc(time)
      )
    );
    setInterval(() => {
      dispatch(fetchTime());
    }, 1000);

    dispatch(fetchQuote());
  }, [dispatch]);

  return (
    <>
      {timeFunc(time) === "0" && (
        <div className="app-clock-section-clock-loader">
          <ThreeDots
            height="250"
            width="250"
            color="#fff"
          />
        </div>
      )}
      <div className={isDay ? "app-background-day" : "app-background-night"}>
        <div className="container">
          <AppClockSection />
        </div>
        <AppClockMoreSection />
      </div>
    </>
  );
}

export default App;
