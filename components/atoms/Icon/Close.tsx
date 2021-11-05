import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const CloseIcon = (({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg
    height={height}
    fill={fill}
    onClick={onClick ? onClick : () => {
    }}
    viewBox="0 0 24 24"
    style={{ ...style, 'display': 'inline-block', 'verticalAlign': 'middle' }}
  >
    <g transform="translate(-192 -110) translate(174 110) translate(18) translate(6 6)">
      <path
        d="M.329.278c.39-.39 1.023-.39 1.414 0L6 4.536 10.257.278c.39-.39 1.024-.39 1.414 0l.05.05c.391.391.391 1.024 0 1.415L7.465 6l4.258 4.257c.36.36.388.928.083 1.32l-.083.094-.05.05c-.391.391-1.024.391-1.415 0L6 7.465l-4.257 4.258c-.39.39-1.024.39-1.414 0l-.05-.05c-.391-.391-.391-1.024 0-1.415L4.535 6 .278 1.743C-.082 1.383-.11.815.195.423L.278.329z"/>
    </g>
  </svg>
));

export default memo(CloseIcon);
