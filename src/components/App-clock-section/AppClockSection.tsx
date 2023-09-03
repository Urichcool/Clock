import React from "react";
import RefreshIcon from "../../images/icons/RefreshIcon";

const AppClockSection = () => {
  return (
    <section className="app-clock-section">
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
    </section>
  );
};

export default AppClockSection;
