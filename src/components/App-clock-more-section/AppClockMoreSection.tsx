import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectMoreSwitcher } from "../../redux/app/appSlice";

function AppClockMoreSection() {
  const isMoreOpen = useAppSelector(selectMoreSwitcher);
  return (
    <section
      className="app-clock-more-section-day"
      style={{
        transform: isMoreOpen ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <div className="container">
        <ul className="more-section-list">
          <div
            className="more-section-list-container"
            style={{ borderRightColor: "rgba(48, 48, 48, 0.25)" }}
          >
            <li className="more-section-item">
              <p className="more-section-heading-text">current timezone</p>
              <p className="more-section-text">Europe/London</p>
            </li>
            <li className="more-section-item">
              <p className="more-section-heading-text">day of the year</p>
              <p className="more-section-text">295</p>
            </li>
          </div>
          <div className="more-section-list-container">
            <li className="more-section-item">
              <p className="more-section-heading-text">day of the week</p>
              <p className="more-section-text">5</p>
            </li>
            <li className="more-section-item">
              <p className="more-section-heading-text">week number</p>
              <p className="more-section-text">42</p>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default AppClockMoreSection;
