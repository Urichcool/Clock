import React, { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectIsDay, selectMoreSwitcher } from "../../redux/app/appSlice";
import { selectTime } from "../../redux/clock/clockSlice";

const AppClockMoreSection: FC = () => {
  const isMoreOpen: boolean = useAppSelector(selectMoreSwitcher);
  const {
    timeZone,
    dayOfWeek,
    dayOfYear,
    weekNumber,
  }: {
    timeZone: string;
    dayOfWeek: string;
    dayOfYear: number;
    weekNumber: number;
  } = useAppSelector(selectTime);
  const isDay: boolean = useAppSelector(selectIsDay);
  return (
    <section
      className={
        isDay ? "app-clock-more-section-day" : "app-clock-more-section-night"
      }
      style={{
        transform: isMoreOpen ? "translateY(0)" : "translateY(100%)",
      }}
      data-testid="more-section"
    >
      <div className="container">
        <ul className="more-section-list">
          <div
            className={
              isDay
                ? "more-section-list-container-day"
                : "more-section-list-container-night"
            }
            style={{ borderRightColor: "rgba(48, 48, 48, 0.25)" }}
          >
            <li className="more-section-item">
              <p className="more-section-heading-text">current timezone</p>
              <p className="more-section-text">{timeZone}</p>
            </li>
            <li className="more-section-item">
              <p className="more-section-heading-text">day of the year</p>
              <p className="more-section-text">{dayOfYear}</p>
            </li>
          </div>
          <div
            className={
              isDay
                ? "more-section-list-container-day"
                : "more-section-list-container-night"
            }
          >
            <li className="more-section-item">
              <p className="more-section-heading-text">day of the week</p>
              <p className="more-section-text">{dayOfWeek}</p>
            </li>
            <li className="more-section-item">
              <p className="more-section-heading-text">week number</p>
              <p className="more-section-text">{weekNumber}</p>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default AppClockMoreSection;
