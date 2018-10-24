import React from "react";
// import './Timer.css'

const Timer = ({
  load,
  time,
  slots,
  backgroundColor,
  foregroundColor,
  timerCount
}) => {
  return (
    <div
      className="Timer"
      style={{
        backgroundColor: backgroundColor,
        color: foregroundColor,
        height: `${(80 - timerCount * 1.25) / timerCount}vh`
      }}
    >
      <div className="header">
        <div className="title">{load}</div>
        <div className="slots">Slots: {slots}</div>
      </div>
      <div
        className="time"
        style={{
          // huge hack to try to adjust font size based on # of divs
          // gotta keep small screens in mind, too
          fontSize: `${(80 - timerCount * 2) /
            timerCount /
            (3.75 - 0.25 * timerCount)}vh`
        }}
      >
        {time}
      </div>
    </div>
  );
};
export default Timer;
