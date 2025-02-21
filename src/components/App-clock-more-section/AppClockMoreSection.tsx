import React, { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectIsDay, selectMoreSwitcher } from "../../redux/app/selectors";
import { selectTime } from "../../redux/clock/selectors";

const AppClockMoreSection: FC = () => {
  const isMoreOpen: boolean = useAppSelector(selectMoreSwitcher);
  const {
    timeZone,
    day,
    month,
    year
  }: {
    timeZone: string;
    day: number;
    month: string;
    year: number
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
        <div className="more-section-list">
          <ul
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
              <p className="more-section-heading-text">year</p>
              <p className="more-section-text">{year}</p>
            </li>
          </ul>
          <ul
            className={
              isDay
                ? "more-section-list-container-day"
                : "more-section-list-container-night"
            }
          >
            <li className="more-section-item">
              <p className="more-section-heading-text">Month</p>
              <p className="more-section-text">{month}</p>
            </li>
            <li className="more-section-item">
              <p className="more-section-heading-text">day</p>
              <p className="more-section-text">{day}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AppClockMoreSection;
