import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const GomingOutIcon = (({ fill = '#000', height = '37px', onClick, style }: SVGIconProps): ReactElement => (
  <svg
    height={height}
    viewBox="0 0 36 37"
    fill={fill}
    style={style}
    onClick={onClick ? onClick : () => {
    }}
  >
    <svg width="36" height="37" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.2421 23.9889C32.8631 19.5801 36.8889 12.1856 34.3496 6.63109C31.5648 0.539476 21.9384 -1.03249 12.8485 3.12001C3.75864 7.27251 -1.35261 15.577 1.43221 21.6686C4.02299 27.3358 12.5351 29.0912 21.0278 25.9648L24.8862 29.0221L20.2728 29.5499L30.1146 36.1746L26.1494 31.203L32.0061 29.0221L25.2421 23.9889Z" fill="#8478EF"/>
    </svg>
  </svg>
));

export default memo(GomingOutIcon);


