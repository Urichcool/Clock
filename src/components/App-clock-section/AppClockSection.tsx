import React, { FC } from "react";
import RefreshIcon from "../../images/icons/RefreshIcon";
import SunIcon from "../../images/icons/SunIcon";
import ArrowUpIcon from "../../images/icons/ArrowUpIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { moreSwitcher } from "../../redux/app/appSlice";
import {
  selectIsDay,
  selectIsQuoteLoading,
  selectMoreSwitcher,
  selectQuoteData,
} from "../../redux/app/selectors";
import { ColorRing } from "react-loader-spinner";
import { fetchQuote } from "../../redux/app/operations";
import { selectLocation, selectTime } from "../../redux/clock/selectors";
import { timeFunc } from "../../utils/timeFunc";
import { timeOfTheDayFunc } from "../../utils/timeOfTheDayFunc";
import MoonIcon from "../../images/icons/MoonIcon";

const AppClockSection: FC = () => {
  const dispatch = useAppDispatch();
  const { time, abbreviation }: { time: string; abbreviation: string } =
    useAppSelector(selectTime);
  const { quote, author }: { quote: string; author: string } =
    useAppSelector(selectQuoteData);
  const isQuoteLoading: boolean = useAppSelector(selectIsQuoteLoading);
  const isMoreOpen: boolean = useAppSelector(selectMoreSwitcher);
  const isDay: boolean = useAppSelector(selectIsDay);
  const { city, country }: { city: string; country: string } =
    useAppSelector(selectLocation);

  return (
    <section
      className={
        isMoreOpen ? "app-clock-section-more-open" : "app-clock-section"
      }
      data-testid="clock-section"
    >
      {!isMoreOpen && (
        <div
          className="app-clock-section-quote-container"
          data-testid="quote-container"
        >
          {isQuoteLoading ? (
            <div
              className="app-clock-section-loader"
            >
              <ColorRing
                height="50"
                width="50"
                colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
              />
            </div>
          ) : (
            <div className="app-clock-section-quote-container-text">
              <p className="app-clock-section-quote body-text">{quote}</p>
              <p className="app-clock-section-quote-author">{author}</p>
            </div>
          )}

          <button
            className="app-clock-section-quote-button"
            data-testid="quote-button"
            onClick={(e: React.MouseEvent<HTMLButtonElement>): void => {
              dispatch(fetchQuote());
            }}
          >
            <RefreshIcon />
          </button>
        </div>
      )}

      <div
        className="app-clock-section-clock-container"
        style={{ margin: isMoreOpen ? "0" : "" }}
      >
        <div className="app-clock-section-clock-time-of-day-container">
          {isDay ? <SunIcon /> : <MoonIcon />}

          <h4 className="heading-h4 app-clock-section-clock-time-of-day">
            {timeOfTheDayFunc(new Date(time).getHours())}
          </h4>
          <h4 className="heading-h4 app-clock-section-clock-time-of-day-currently">
            , it's currently
          </h4>
        </div>
        <div className="app-clock-section-time-container">
          <h1 className="heading-h1 app-clock-section-time">
            {timeFunc(time)}
          </h1>
          <p className="body-time-zone app-clock-section-time-zone">
            {abbreviation}
          </p>
        </div>

        <div className="app-clock-section-btn-container">
          <h3 className="heading-h3 app-clock-section-country">
            {`in ${city}, ${country}`}
          </h3>
          <button
            className="app-clock-section-more-btn"
            data-testid="more-button"
            onClick={(e) => {
              dispatch(moreSwitcher(!isMoreOpen));
            }}
          >
            {isMoreOpen ? "less" : "more"} <ArrowUpIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppClockSection;
