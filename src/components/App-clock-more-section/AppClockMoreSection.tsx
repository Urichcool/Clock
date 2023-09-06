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
        <h1>Hello</h1>
      </div>
    </section>
  );
}

export default AppClockMoreSection;
