import React from 'react'

const ArrowNode = ({direction}) =>
  <g id="g_dir">
    <path
      d="m64.49988,34.63094l4.9576,-32.42097l4.95763,32.42097l-2.47869,0l0,32.57588l-4.95763,0l0,-32.57588l-2.4789,0l-0.00002,0l0.00001,0z"
      fill="#00AA00"
      transform={`rotate(${direction}, 67, 67)`}
      stroke="#CCFF00"
      id="dir"
    />
  </g>

export default ArrowNode;