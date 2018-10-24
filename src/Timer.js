import React from "react";
// import './Timer.css'

const Timer = ({
  load,
  time,
  slots,
  backgroundColor,
  foregroundColor,
  locationId
}) => {
  const logo = require(`./logos/logo-${locationId}.svg`);

  return (
    <div
      className="Timer"
      style={{
        backgroundColor: backgroundColor,
        color: foregroundColor,
        backgroundImage: `url(${logo})`
      }}
    >
      <div className="header">
        <div className="title">{load}</div>
        <div className="slots">Slots Remaining: {slots}</div>
      </div>
      <div className="time">{time}</div>
    </div>
  );
};
export default Timer;
