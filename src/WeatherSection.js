import React from 'react';
import Compass from './Compass'
import Summary from './Summary'

const WeatherSection = ({winds, prevWindDirections, weather, loadsFlownToday}) =>
  <div className="WeatherSection">
    <Compass winds={winds} prevWindDirections={prevWindDirections}/>
    <Summary weather={weather} winds={winds} loadsFlownToday={loadsFlownToday} />
  </div>

export default WeatherSection;
