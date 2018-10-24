import React from "react";
import Timer from "./Timer";
import BigLogo from "./BigLogo";

const Timers = ({ timers, locationId }) => {
  return (
    <div className="Timers">
      {timers.length > 0 ? (
        timers.map((timer, i) => (
          <Timer
            key={i}
            load={timer.load}
            time={timer.time}
            slots={timer.slots}
            backgroundColor={timer.backgroundColor}
            foregroundColor={timer.foregroundColor}
            locationId={locationId}
          />
        ))
      ) : (
        <BigLogo locationId={locationId} />
      )}
    </div>
  );
};

export default Timers;
