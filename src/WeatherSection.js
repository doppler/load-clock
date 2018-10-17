import React from 'react';
import Compass from './Compass'
import Summary from './Summary'

const WeatherSection = ({winds, prevWindDirections, weather, loadsFlownToday, lastUpdate}) =>
  <div className="WeatherSection">
    <Compass winds={winds} prevWindDirections={prevWindDirections}/>
    <Summary weather={weather} winds={winds} loadsFlownToday={loadsFlownToday} lastUpdate={lastUpdate} />
  </div>

export default WeatherSection;
