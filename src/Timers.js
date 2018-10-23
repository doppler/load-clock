import React from "react";
import Timer from "./Timer";
import BigLogo from "./BigLogo";

const Timers = ({ timers }) => {
  return (
    <div className="Timers">
      {timers.length > 0 ? (
        timers.map(
          (timer, i) =>
            timer.enabled === true ? (
              <Timer
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
