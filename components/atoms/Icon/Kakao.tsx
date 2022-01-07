import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const KakaoIcon = (({ fill = '#000', height = '41px', onClick, style }: SVGIconProps): ReactElement => (
  <svg
    height={height}
    viewBox="0 0 22 20"
    fill={fill}
    style={style}
    onClick={onClick ? onClick : () => {
    }}
  >
    <svg width="22" height="20" viewBox="0 0 22 20">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6513 0C4.76872 0 0 3.82541 0 8.54421C0 11.595 1.99364 14.272 4.9926 15.7836C4.82945 16.356 3.94416 19.4662 3.90893 19.7107C3.90893 19.7107 3.88773 19.8943 4.00459 19.9643C4.12145 20.0342 4.25889 19.9799 4.25889 19.9799C4.594 19.9323 8.14488 17.3947 8.75948 16.954C9.37347 17.0425 10.0057 17.0884 10.6513 17.0884C16.5339 17.0884 21.3026 13.2631 21.3026 8.54421C21.3026 3.82541 16.5339 0 10.6513 0" fill="#181600"/>
    </svg>

  </svg>
));

export default memo(KakaoIcon);
