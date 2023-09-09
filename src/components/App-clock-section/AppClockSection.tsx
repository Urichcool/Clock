import React from "react";
import RefreshIcon from "../../images/icons/RefreshIcon";
import SunIcon from "../../images/icons/SunIcon";
import ArrowUpIcon from "../../images/icons/ArrowUpIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { moreSwitcher, selectMoreSwitcher } from "../../redux/app/appSlice";

const AppClockSection = () => {
  const dispatch = useAppDispatch();
  const isMoreOpen = useAppSelector(selectMoreSwitcher);
  return (
    <section
      className={
        isMoreOpen ? "app-clock-section-more-open" : "app-clock-section"
      }
    >
      {!isMoreOpen && (
        <div className="app-clock-section-quote-container">
          <div className="app-clock-section-quote-container-text">
            <p className="app-clock-section-quote body-text">
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </p>
            <p className="body-text app-clock-section-quote-author">
              Ada Lovelace
            </p>
          </div>
          <button className="app-clock-section-quote-button">
            <RefreshIcon />
          </button>
        </div>
      )}

      <div
        className="app-clock-section-clock-container"
        style={{ margin: isMoreOpen ? "0" : "" }}
      >
        <div className="app-clock-section-clock-time-of-day-container">
          <SunIcon />
          <h4 className="heading-h4 app-clock-section-clock-time-of-day">
            good morning
          </h4>
          <h4 className="heading-h4 app-clock-section-clock-time-of-day-currently">
            , it's currently
          </h4>
        </div>
        <div className="app-clock-section-time-container">
          <h1 className="heading-h1 app-clock-section-time">11:37</h1>
          <p className="body-time-zone app-clock-section-time-zone">bst</p>
        </div>
        <div className="app-clock-section-btn-container">
          <h3 className="heading-h3 app-clock-section-country">
            in London, UK
          </h3>
          <button
            className="app-clock-section-more-btn"
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
