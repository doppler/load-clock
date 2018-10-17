import React from 'react';

const Summary = (props) =>
  <div className="Summary">
    <div className="weatherText">{props.weather.temp}&deg;F</div>
    <div className="weatherText bubble">5m High: {props.winds.high_5min} mph</div>
    <div className="weatherText bubble">10m High: {props.winds.high_10min} mph</div>
    <div className="weatherText bubble">20m High: {props.winds.high_20min} mph</div>
    <div className="loadsummary bubble">Loads flown today: {props.loadsFlownToday}</div>
  </div>

export default Summary;
