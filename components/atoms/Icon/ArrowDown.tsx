import React, { memo } from 'react';
import { SVGIconProps } from './';

const ArrowDownIcon = (({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): JSX.Element => (
  <svg
    height={height}
    viewBox="0 0 8 5"
    fill={fill}
    style={style}
    onClick={onClick ? onClick : () => {
    }}
  >
    <path d="M0.156907 0.156907C0.366116 -0.0523024 0.705312 -0.0523024 0.914522 0.156907L3.75 2.99239L6.58548 0.156907C6.79469 -0.0523024 7.13388 -0.0523024 7.34309 0.156907C7.5523 0.366117 7.5523 0.705312 7.34309 0.914522L4.12881 4.12881C3.9196 4.33802 3.5804 4.33802 3.37119 4.12881L0.156907 0.914522C-0.0523024 0.705312 -0.0523024 0.366117 0.156907 0.156907Z" fill="#212025"/>
  </svg>
));

export default memo(ArrowDownIcon);