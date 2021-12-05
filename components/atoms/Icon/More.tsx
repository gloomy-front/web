import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const MoreIcon = ({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg height={height} viewBox="0 0 24 24" fill={fill} style={style} onClick={onClick ? onClick : () => {}}>
    <path d="M6.23 11C5.5504 11 5 11.5504 5 12.23C5 12.9089 5.5504 13.46 6.23 13.46C6.90959 13.46 7.46 12.9089 7.46 12.23C7.46 11.5504 6.90959 11 6.23 11ZM11.8565 11C11.1769 11 10.6258 11.5504 10.6258 12.23C10.6258 12.9089 11.1769 13.46 11.8565 13.46C12.5354 13.46 13.0865 12.9089 13.0865 12.23C13.0865 11.5504 12.5354 11 11.8565 11ZM16.2523 12.23C16.2523 11.5504 16.8034 11 17.4823 11C18.1619 11 18.713 11.5504 18.713 12.23C18.713 12.9089 18.1619 13.46 17.4823 13.46C16.8034 13.46 16.2523 12.9089 16.2523 12.23Z" />
  </svg>
);

export default memo(MoreIcon);
