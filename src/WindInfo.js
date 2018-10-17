import React from 'react';
// import './WindInfo.css';

const directionStringFromDirection = (direction) => {
  const dirs = [
    'N', 'NNE', 'NE', 'ENE',
    'E', 'ESE', 'SE', 'SSE',
    'S', 'SSW', 'SW', 'WSW',
    'W', 'WNW', 'NW', 'NNW'
  ];
  const directionModulo = direction %= 360;
  const index = Math.round(((directionModulo) < 0 ? direction + 360 : direction) / 22.5) % 16;
  return dirs[index];
}

const WindInfo = ({winds}) => {
  let directionString = directionStringFromDirection(winds.direction);
  return (
    <div className="WindInfo">
      {directionString} ( {winds.direction} &deg; )
    </div>
  )
}

export default WindInfo;
