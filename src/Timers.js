import React from "react";
import Timer from "./Timer";
import BigLogo from "./BigLogo";

const Timers = ({ timers, locationId }) => {
  const logo = require(`./logos/logo-${locationId}.svg`);
  return (
    <div className="Timers" style={{ backgroundImage: `url(${logo})` }}>
      {timers.length > 0 ? (
        timers.map((timer, i) => (
          <Timer
            key={i}
            load={timer.load}
            time={timer.time}
            slots={timer.slots}
            timerCount={timers.length}
            backgroundColor={timer.backgroundColor}
            foregroundColor={timer.foregroundColor}
          />
        ))
      ) : (
        <BigLogo locationId={locationId} />
      )}
    </div>
  );
};

export default Timers;
