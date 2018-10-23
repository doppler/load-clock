import React from "react";
// import './Timer.css'

const Timer = ({ load, time, slots, backgroundColor, foregroundColor }) => (
  <div
    className="Timer"
    style={{ backgroundColor: backgroundColor, color: foregroundColor }}
  >
    <div className="header">
      <div className="title">{load}</div>
      <div className="slots">Slots Remaining: {slots}</div>
    </div>
    <div className="time">{time}</div>
  </div>
);

export default Timer;
