import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const WriteButton = ({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg height={height} viewBox="0 0 41 40" fill={fill} style={style} onClick={onClick ? onClick : () => {}}>
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="41" height="40" fill="url(#patternWrite)" />
      <defs>
        <pattern id="patternWrite" patternContentUnits="objectBoundingBox" width="1" height="1" cx="0" cy="0" r="5">
          <use xlinkHref="#imageWrite" transform="translate(0 -0.0107509) scale(0.00341297)" />
        </pattern>
        <image
          id="imageWrite"
          width="293"
          height="292"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiM4NDc4RUYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjY1MTk3IDIxSDEyLjQyNUMxMi41OTg5IDIxIDEyLjc2NCAyMC45MzA1IDEyLjg4NTcgMjAuODA4OEwyMi43OTE0IDEwLjkwMzFDMjIuOTEzMSAxMC43ODE0IDIyLjk4MjYgMTAuNjExOSAyMi45ODI2IDEwLjQ0MjRDMjIuOTgyNiAxMC4yNjg2IDIyLjkxMzEgMTAuMTAzNCAyMi43OTE0IDkuOTgxNjhMMjAuMDAwOSA3LjE5MTI0QzE5Ljg3OTIgNy4wNjk1NCAxOS43MTQxIDcgMTkuNTQwMiA3QzE5LjM2NjMgNyAxOS4yMDEyIDcuMDY5NTQgMTkuMDc5NSA3LjE5MTI0TDkuMTkxMjQgMTcuMTE0M0M5LjA2OTU0IDE3LjI0MDMgOSAxNy40MDU1IDkgMTcuNTc1VjIwLjM0OEM5IDIwLjcwODggOS4yOTEyMSAyMSA5LjY1MTk3IDIxWk0yMi45NDMzIDIzSDkuNUM5LjIyMzMzIDIzIDkgMjMuMjIzMyA5IDIzLjVDOSAyMy43NzY3IDkuMjIzMzMgMjQgOS41IDI0SDIyLjk0MzNDMjMuMjIgMjQgMjMuNDQzMyAyMy43NzY3IDIzLjQ0MzMgMjMuNUMyMy40NDMzIDIzLjIyMzMgMjMuMjIgMjMgMjIuOTQzMyAyM1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="
        />
      </defs>
    </svg>
  </svg>
);

export default memo(WriteButton);
