import React from "react";
import Timer from "./Timer";
import BigLogo from "./BigLogo";

const Timers = ({ timers }) => {
  return (
    <div className="Timers">
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
        <BigLogo />
      )}
    </div>
  );
};

export default Timers;
