import React from 'react';
import {Svg, Circle} from 'react-native-svg'
const ProgressCircle = () => (
  <Svg style={{position:"relative",width:54,height:54,zIndex:1000}}>
    <Circle stroke="rgba(196, 196, 196, 0.5)"  strokeWidth="3" strokeLinecap="round" transform="translate(2,2)" cx="25" cy="25" r="25" ></Circle>
    <Circle stroke="#e54355" strokeDasharray="70" strokeDashoffset="162" strokeWidth="3" strokeLinecap="round" transform="translate(2,2)" cx="25" cy="25" r="25" ></Circle>
  </Svg>
);

export default ProgressCircle;
