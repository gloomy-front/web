import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const SearchIcon = (({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg
    height={height}
    viewBox="0 0 24 27"
    fill={fill}
    style={style}
    onClick={onClick ? onClick : () => {
    }}
  >
    <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 21.2674L16.5 17.9955" stroke="#1A1919" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
      <ellipse cx="11.5" cy="12.5423" rx="7" ry="7.63444" stroke="#1A1919"/>
    </svg>
  </svg>
));

export default memo(SearchIcon);