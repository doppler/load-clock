import React from 'react'
import LoadTimer from './LoadTimer'

const Timers = ({timers}) =>
  <div className="Timers">
    {timers.map((timer, i) =>
      timer.enabled === true ?
        <LoadTimer key={i}
          load={timer.load}
          time={timer.time}
          slots={timer.slots}
          backgroundColor={timer.backgroundColor}
          foregroundColor={timer.foregroundColor}/>
        : null
    )}
  </div>

export default Timers
