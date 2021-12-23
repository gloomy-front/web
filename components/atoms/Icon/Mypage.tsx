import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from '.';

const Mypage = ({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg height={height} viewBox="0 0 24 24" fill={fill} style={style} onClick={onClick ? onClick : () => {}}>
    <path
      d="M13 4C10.7909 4 9 5.79086 9 8C9 10.2091 10.7909 12 13 12C15.2091 12 17 10.2091 17 8C17 5.79086 15.2091 4 13 4ZM7 8C7 4.68629 9.68629 2 13 2C16.3137 2 19 4.68629 19 8C19 11.3137 16.3137 14 13 14C9.68629 14 7 11.3137 7 8ZM9 18C7.34315 18 6 19.3431 6 21C6 21.5523 5.55228 22 5 22C4.44772 22 4 21.5523 4 21C4 18.2386 6.23858 16 9 16H17C19.7614 16 22 18.2386 22 21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21C20 19.3431 18.6569 18 17 18H9Z"
      fill="#BDBDBD"
    />
  </svg>
);

export default memo(Mypage);
