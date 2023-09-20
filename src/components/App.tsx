import React, { FC, useEffect, useMemo } from "react";
import AppClockSection from "./App-clock-section/AppClockSection";
import AppClockMoreSection from "./App-clock-more-section/AppClockMoreSection";
import { fetchQuote } from "../redux/app/operations";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchLocation, fetchTime } from "../redux/clock/operations";
import { isDaySwitcher } from "../redux/app/appSlice";
import { selectTime } from "../redux/clock/selectors";
import { timeFunc } from "../utils/timeFunc";
import { ThreeDots } from "react-loader-spinner";
import { isDayFunc } from "../utils/isDayFunc";
import { selectIsDay } from "../redux/app/selectors";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { time }: { time: string } = useAppSelector(selectTime);
  const isDay: boolean = useAppSelector(selectIsDay);
  const isDayCheck: boolean = useMemo(() => isDayFunc(time), [time]);

  useEffect(() => {
    dispatch(fetchLocation());
    dispatch(isDaySwitcher(isDayCheck));
    setInterval(() => {
      dispatch(fetchTime());
    }, 1000);

    dispatch(fetchQuote());
  }, [dispatch, isDayCheck]);

  return (
    <>
      {timeFunc(time) === "0" && (
        <div className="app-clock-section-clock-loader">
          <ThreeDots height="250" width="250" color="#fff" />
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
};

export default App;
