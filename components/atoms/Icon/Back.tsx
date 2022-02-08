import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from '.';

const BackIcon = ({ fill = '#000', height = '11.85px', onClick, style }: SVGIconProps): ReactElement => (
  <svg height={height} fill={fill} onClick={onClick ? onClick : () => {}} viewBox="0 0 7 12" style={style}>
    <path
      d="M6.75214 0.247861C7.08262 0.578342 7.08262 1.11416 6.75214 1.44464L2.27303 5.92375L6.75214 10.4029C7.08262 10.7333 7.08262 11.2692 6.75214 11.5996C6.42166 11.9301 5.88584 11.9301 5.55536 11.5996L0.477861 6.52214C0.14738 6.19166 0.14738 5.65584 0.477861 5.32536L5.55536 0.247861C5.88584 -0.0826204 6.42166 -0.0826203 6.75214 0.247861Z"
      fill="#212025"
    />
  </svg>
);

export default memo(BackIcon);
