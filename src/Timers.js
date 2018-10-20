import React from "react";
import LoadTimer from "./LoadTimer";
import BigLogo from "./BigLogo";

const Timers = ({ timers }) => {
  return (
    <div className="Timers">
      {timers.length > 0 ? (
        timers.map(
          (timer, i) =>
            timer.enabled === true ? (
              <LoadTimer
                key={i}
                load={timer.load}
                time={timer.time}
                slots={timer.slots}
                backgroundColor={timer.backgroundColor}
                foregroundColor={timer.foregroundColor}
              />
            ) : null
        )
      ) : (
        <BigLogo />
      )}
    </div>
  );
};

export default Timers;
