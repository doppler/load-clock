import React from "react";
// import './Timer.css'

const Timer = ({
  load,
  time,
  slots,
  backgroundColor,
  foregroundColor,
  timerCount
}) => (
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
      <div className="slots">Slots Remaining: {slots}</div>
    </div>
    <div
      className="time"
      style={{ fontSize: `${(50 - timerCount) / timerCount}vh` }}
    >
      {time}
    </div>
  </div>
);

export default Timer;
