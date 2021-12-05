import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const MoreIcon = (({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg
    height={height}
    viewBox="0 0 26 26"
    fill={fill}
    style={style}
    onClick={onClick ? onClick : () => {
    }}
  >
    <svg width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="3" cy="3" r="3" fill="white"/>
      <circle cx="23" cy="3" r="3" fill="white"/>
      <circle cx="13" cy="3" r="3" fill="white"/>
    </svg>
  </svg>
));

export default memo(MoreIcon);