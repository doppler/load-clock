import React from "react";
import propTypes from "prop-types";
import Compass from "./Compass";
import Summary from "./Summary";

const WeatherSection = ({
  winds,
  prevWindDirections,
  weather,
  loadsFlownToday,
  lastUpdate
}) => (
  <div className="WeatherSection">
    <Compass winds={winds} prevWindDirections={prevWindDirections} />
    <Summary
      weather={weather}
      winds={winds}
      loadsFlownToday={loadsFlownToday}
      lastUpdate={lastUpdate}
    />
  </div>
);

WeatherSection.propTypes = {
  winds: propTypes.object.isRequired,
  prevWindDirections: propTypes.array.isRequired,
  weather: propTypes.object.isRequired,
  loadsFlownToday: propTypes.number.isRequired,
  lastUpdate: propTypes.instanceOf(Date).isRequired
};

export default WeatherSection;
