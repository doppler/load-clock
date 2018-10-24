import React from "react";

const BigLogo = ({ locationId }) => {
  const logo = require(`./logos/logo-${locationId}.svg`);
  return (
    <div className="BigLogo" style={{ backgroundImage: `url(${logo})` }} />
  );
};
export default BigLogo;
