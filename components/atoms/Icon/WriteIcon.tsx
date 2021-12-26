import React, { memo } from 'react';
import { SVGIconProps } from '.';

const WriteIcon = ({ fill = '#000', height = '32px', onClick, style }: SVGIconProps): JSX.Element => (
  <svg height={height} viewBox="0 0 32 32" fill={fill} style={style} onClick={onClick ? onClick : () => {}}>
    <circle cx="16" cy="16" r="16" fill="#8478EF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.65197 21H12.425C12.5989 21 12.764 20.9305 12.8857 20.8088L22.7914 10.9031C22.9131 10.7814 22.9826 10.6119 22.9826 10.4424C22.9826 10.2686 22.9131 10.1034 22.7914 9.98168L20.0009 7.19124C19.8792 7.06954 19.7141 7 19.5402 7C19.3663 7 19.2012 7.06954 19.0795 7.19124L9.19124 17.1143C9.06954 17.2403 9 17.4055 9 17.575V20.348C9 20.7088 9.29121 21 9.65197 21ZM22.9433 23H9.5C9.22333 23 9 23.2233 9 23.5C9 23.7767 9.22333 24 9.5 24H22.9433C23.22 24 23.4433 23.7767 23.4433 23.5C23.4433 23.2233 23.22 23 22.9433 23Z"
      fill="white"
    />
  </svg>
);

export default memo(WriteIcon);
