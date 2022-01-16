import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from '.';

const BackIcon = ({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg height={height} fill={fill} onClick={onClick ? onClick : () => {}} viewBox="0 0 24 24" style={style}>
    <path
      d="M12.4778 17.5998C12.1474 17.2693 12.1474 16.7335 12.4778 16.403L16.957 11.9239L12.4778 7.4448C12.1474 7.11431 12.1474 6.5785 12.4778 6.24802C12.8083 5.91754 13.3441 5.91754 13.6746 6.24802L18.7521 11.3255C19.0826 11.656 19.0826 12.1918 18.7521 12.5223L13.6746 17.5998C13.3441 17.9303 12.8083 17.9303 12.4778 17.5998Z"
      fill="#BDBDBD"
    />
  </svg>
);

export default memo(BackIcon);
