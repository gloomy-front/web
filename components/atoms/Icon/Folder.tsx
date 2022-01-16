import React, { memo } from 'react';
import { SVGIconProps } from './';

const FolderIcon = (({ fill = '#8478EF', height = '24px', onClick, style }: SVGIconProps) => (
  <svg
    height={height}
    viewBox="0 0 24 24"
    fill='none'
    style={style}
    onClick={onClick ? onClick : () => {
    }}
  >
    <path d="M11.2929 6.70711L11.5858 7H12H20V19H4L4 5H9.58579L11.2929 6.70711Z" stroke={fill} strokeWidth="2"/>
  </svg>
));

export default memo(FolderIcon);
