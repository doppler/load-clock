import React from 'react';
import Compass from './Compass'
import WeatherSummary from './WeatherSummary'
import './WeatherSection.css'

const WeatherSection = ({winds, weather, loadsFlownToday}) =>
  <div className="WeatherSection">
    <Compass winds={winds}/>
    <WeatherSummary weather={weather} winds={winds} loadsFlownToday={loadsFlownToday} />
  </div>

export default WeatherSection;
