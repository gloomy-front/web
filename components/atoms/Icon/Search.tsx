import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const SearchIcon = (({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg
    height={height}
    viewBox="0 0 18 18"
    fill={fill}
    style={style}
    onClick={onClick ? onClick : () => {
    }}
  >
    <svg width="18" height="18" fill="none" >
      <path d="M10.8 1.8C13.7823 1.8 16.2 4.21766 16.2 7.2C16.2 10.1823 13.7823 12.6 10.8 12.6C7.81766 12.6 5.4 10.1823 5.4 7.2C5.4 4.21766 7.81766 1.8 10.8 1.8ZM18 7.2C18 3.22355 14.7765 0 10.8 0C6.82355 0 3.6 3.22355 3.6 7.2C3.6 8.86384 4.16437 10.3959 5.11213 11.6151L0.263603 16.4636C-0.0878677 16.8151 -0.0878677 17.3849 0.263603 17.7364C0.615076 18.0879 1.18492 18.0879 1.5364 17.7364L6.38492 12.8879C7.60414 13.8356 9.13616 14.4 10.8 14.4C14.7765 14.4 18 11.1764 18 7.2Z" fill="#212025"/>
    </svg>

  </svg>
));

export default memo(SearchIcon);