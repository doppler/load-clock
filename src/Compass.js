import React from 'react'
import ArrowNode from './ArrowNode'

const Compass = ({winds, prevWindDirections}) => {
  let windTextFgColor = "white";
  let windTextBgColor = "black";

  if (winds.speed >= 30) { windTextFgColor="white"; windTextBgColor="red"; }
  else if (winds.speed >= 22) { windTextFgColor="yellow"; }

  return (
    <div className="Compass">
      <svg xmlns="http://www.w3.org/2000/svg" id="svg_compass" viewBox="0,0,135,135" className="svg-content">
        <g>
          <title>Skydive Wind Compass</title>
          <g id="g11">
            <circle cx="67" cy="67" r="65" stroke="blue" strokeWidth="2" fill="black" id="svg_1"/>
            <line x1="21" y1="21" x2="26" y2="26" stroke="blue" strokeWidth="3" id="svg_nw"/>
            <line x1="21" y1="113" x2="26" y2="108" stroke="blue" strokeWidth="3" id="svg_sw"/>
            <line x1="113" y1="113" x2="108" y2="108" stroke="blue" strokeWidth="3" id="svg_se"/>
            <line x1="112" y1="21" x2="107" y2="26" stroke="blue" strokeWidth="3" id="svg_ne"/>
            <line x1="8" y1="42" x2="11" y2="44" stroke="blue" strokeWidth="2" id="svg_wnw"/>
            <line x1="43" y1="7" x2="45" y2="11" stroke="blue" strokeWidth="2" id="svg_nnw"/>
            <line x1="7" y1="92" x2="10" y2="90" stroke="blue" strokeWidth="2" id="svg_wsw"/>
            <line x1="91" y1="7" x2="89" y2="11" stroke="blue" strokeWidth="2" id="svg_nne"/>
            <line x1="42" y1="126" x2="44" y2="123" stroke="blue" strokeWidth="2" id="svg_ssw"/>
            <line x1="126" y1="42" x2="123" y2="44" stroke="blue" strokeWidth="2" id="svg_ene"/>
            <line x1="92" y1="126" x2="90" y2="123" stroke="blue" strokeWidth="2" id="svg_sse"/>
            <line x1="126" y1="92" x2="123" y2="90" stroke="blue" strokeWidth="2" id="svg_ese"/>
            <line x1="67" y1="2" x2="67" y2="12" stroke="blue" strokeWidth="3" id="svg_n"/>
            <line x1="67" y1="132" x2="67" y2="122" stroke="blue" strokeWidth="3" id="svg_s"/>
            <line x1="132" y1="67" x2="122" y2="67" stroke="blue" strokeWidth="3" id="svg_e"/>
            <line x1="2" y1="67" x2="12" y2="67" stroke="blue" strokeWidth="3" id="svg_w"/>

            {prevWindDirections.map((direction, index) => {
              return <ArrowNode key={index} direction={direction} index={index}/>
            })}

            <text fontSize="15" fontFamily="Sans-serif" x="62" y="27" fill="white" id="svg_3">N</text>
            <text fontSize="15" fontFamily="Sans-serif" x="62" y="117" fill="white" id="svg_5">S</text>
            <text fontSize="15" fontFamily="Sans-serif" x="110" y="72" fill="white" id="svg_7">E</text>
            <text fontSize="15" fontFamily="Sans-serif" x="14" y="72" fill="white" id="svg_9">W</text>

            <circle fill={windTextBgColor} stroke="#000000" cx="67" cy="67" r="33" id="svg_cwindbg"/>
            <text fill={windTextFgColor} stroke="#FFF" strokeWidth="0" x="67" y="82" id="svg_cwind" fontSize="48" fontFamily="Sans-serif" textAnchor="middle">{winds.speed}</text>
          </g>
        </g>
      </svg>
    </div>
  )
}
export default Compass;
