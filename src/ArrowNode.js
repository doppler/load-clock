import React from "react";
import propTypes from "prop-types";

const ArrowNode = ({ direction, current = false }) => {
  const fill = current ? "rgba(0, 255, 0, 1)" : "rgba(255, 255, 0, 0.1)";
  return (
    <g id="g_dir">
      <path
        d="m64.49988,34.63094l4.9576,-32.42097l4.95763,32.42097l-2.47869,0l0,32.57588l-4.95763,0l0,-32.57588l-2.4789,0l-0.00002,0l0.00001,0z"
        fill={fill}
        transform={`rotate(${direction}, 67, 67)`}
      />
    </g>
  );
};

ArrowNode.propTypes = {
  direction: propTypes.number.isRequired,
  current: propTypes.bool.isRequired
};

export default ArrowNode;
