import React from "react";
import propTypes from "prop-types";
import Timer from "./Timer";

const Timers = ({ timers, locationId }) => {
  const logo = require(`./logos/logo-${locationId}.svg`);
  return (
    <div className="Timers" style={{ backgroundImage: `url(${logo})` }}>
      {timers.map((timer, i) => (
        <Timer
          key={i}
          load={timer.load}
          time={timer.time}
          slots={timer.slots}
          timerCount={timers.length}
          backgroundColor={timer.backgroundColor}
          foregroundColor={timer.foregroundColor}
        />
      ))}
    </div>
  );
};

Timers.propTypes = {
  timers: propTypes.array.isRequired,
  locationId: propTypes.string.isRequired
};
export default Timers;
