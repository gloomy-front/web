import React, { memo } from 'react';
import { SVGIconProps } from './';

const CameraIcon = (({ fill = '#8478EF', height = '24px', onClick, style }: SVGIconProps) => (
  <svg
    height={height}
    viewBox="0 0 24 24"
    fill='none'
    style={style}
    onClick={onClick ? onClick : () => {
    }}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M10.5352 4C9.86648 4 9.24201 4.3342 8.87108 4.8906L7.46482 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H16.5352L15.1289 4.8906C14.758 4.3342 14.1335 4 13.4648 4H10.5352ZM10.5352 6H13.4648L14.8711 8.1094C15.242 8.6658 15.8665 9 16.5352 9H19V18H5V9H7.46482C8.13352 9 8.75799 8.6658 9.12892 8.1094L10.5352 6ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z" fill={fill}/>
  </svg>
));

export default memo(CameraIcon);
