import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from '.';

const BackIcon = ({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg height={height} fill={fill} onClick={onClick ? onClick : () => {}} viewBox="0 0 24 24" style={style}>
    <path d="M11.4999 6.29173C11.6266 6.29173 11.7536 6.33974 11.8509 6.4354C12.0476 6.62907 12.0499 6.94573 11.8563 7.14273L6.93094 12.1461L11.8563 17.1494C12.0499 17.3461 12.0476 17.6627 11.8509 17.8564C11.6539 18.0501 11.3373 18.0474 11.1439 17.8511L5.87294 12.4967C5.68161 12.3021 5.68161 11.9901 5.87294 11.7954L11.1439 6.44107C11.2416 6.34173 11.3709 6.29173 11.4999 6.29173Z" />
  </svg>
);

export default memo(BackIcon);
