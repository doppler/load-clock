import React from 'react';
import Compass from './Compass'
import WeatherSummary from './WeatherSummary'

const WeatherSection = ({winds, weather, loadsFlownToday}) =>
  <div className="WeatherSection">
    <Compass winds={winds}/>
    <WeatherSummary weather={weather} winds={winds} loadsFlownToday={loadsFlownToday} />
  </div>

export default WeatherSection;
