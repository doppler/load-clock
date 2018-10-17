import React from 'react';
// import WindInfo from './WindInfo'
import Compass from './Compass'
import Summary from './Summary'
// import './WeatherSection.css'

const WeatherSection = ({winds, prevWindDirections, weather, loadsFlownToday}) =>
  <div className="WeatherSection">
    <Compass winds={winds} prevWindDirections={prevWindDirections}/>
    {/* <WindInfo winds={winds}/> */}
    <Summary weather={weather} winds={winds} loadsFlownToday={loadsFlownToday} />
  </div>

export default WeatherSection;
