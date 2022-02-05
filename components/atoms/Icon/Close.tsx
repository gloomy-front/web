import React, { memo } from 'react';
import { SVGIconProps } from './';

const CloseIcon = (({ fill = '#222222', height = '24px', onClick, style }: SVGIconProps) => (
  <svg
    height={height}
    fill={fill}
    onClick={onClick ? onClick : () => {
    }}
    viewBox="0 0 14 14"
    style={{ ...style, 'display': 'inline-block', 'verticalAlign': 'middle' }}
  >
    <path d="M1 1L7 7M7 7L13 13M7 7L13 1M7 7L1 13" stroke={fill} strokeWidth="2" strokeLinecap="round"/>

  </svg>
));

export default memo(CloseIcon);
