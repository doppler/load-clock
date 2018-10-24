import React from "react";
import format from "date-fns/format";

const directionStringFromDirection = direction => {
  const dirs = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW"
  ];
  const directionModulo = (direction %= 360);
  const index =
    Math.round((directionModulo < 0 ? direction + 360 : direction) / 22.5) % 16;
  return dirs[index];
};

const Summary = ({ winds, weather, loadsFlownToday, lastUpdate }) => {
  let directionString = directionStringFromDirection(winds.direction);
  return (
    <div className="Summary">
      <table>
        <tbody>
          <tr>
            <td>Temperature</td>
            <td>
              {weather.temp}
              &deg;F
            </td>
          </tr>
          <tr>
            <td>Wind Direction</td>
            <td>
              {directionString} ( {winds.direction} &deg; )
            </td>
          </tr>
          <tr>
            <td>5 min High</td>
            <td>{winds.high_5min} mph</td>
          </tr>
          <tr>
            <td>10 min High</td>
            <td>{winds.high_10min} mph</td>
          </tr>
          <tr>
            <td>20 min High</td>
            <td>{winds.high_20min} mph</td>
          </tr>
          <tr>
            <td>Loads Flown Today</td>
            <td>{loadsFlownToday}</td>
          </tr>
          <tr>
            <td>Last Update</td>
            <td>{format(lastUpdate, "MM/DD/YY h:mm:ss A")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Summary;
