import React from 'react'
import './LoadTimer.css'

const LoadTimer = ({load, time, slots, backgroundColor, foregroundColor}) =>
  <div className="timer" style={{backgroundColor: backgroundColor, color: foregroundColor}}>
    <div className="title">{load}</div>
    <div className="text">{time}</div>
    <div className="slots">Slots Remaining: {slots}</div>
  </div>

export default LoadTimer;
