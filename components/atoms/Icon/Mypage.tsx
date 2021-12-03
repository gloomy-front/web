import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const MyPage = ({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg height={height} viewBox="0 0 41 40" fill={fill} style={style} onClick={onClick ? onClick : () => {}}>
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="41" height="40" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_397:193" transform="translate(0 -0.0107509) scale(0.00341297)" />
        </pattern>
        <image
          id="image0_397:193"
          width="293"
          height="292"
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4xODI4IDcuMTcyMTVDMTYuMTgyOCA5LjQ3MjkxIDE0LjMxMTQgMTEuMzQ0MyAxMi4wMTE2IDExLjM0NDNDOS43MTE3NiAxMS4zNDQzIDcuODQwODIgOS40NzI5MSA3Ljg0MDgyIDcuMTcyMTVDNy44NDA4MiA0Ljg3MTQgOS43MTE3NiAzIDEyLjAxMTYgM0MxNC4zMTE0IDMgMTYuMTgyOCA0Ljg3MTQgMTYuMTgyOCA3LjE3MjE1Wk0xMS43NDU3IDEyLjIwNjFDMTMuNDUyMyAxMi4xOTc4IDE1LjI2MDIgMTIuMTg5IDE2LjI5OTkgMTIuMTg5QzE4LjcxODMgMTIuMTg5IDIwLjAyMzEgMTQuMjA1MSAyMC4wMjMxIDE2LjA5OThWMjAuM0MyMC4wMjMxIDIwLjY4MjcgMTkuNzA5NSAyMSAxOS4zMjMxIDIxSDQuNzAwMDNDNC4zMTMxNCAyMSA0IDIwLjY4MjcgNCAyMC4zVjE2LjM1MTlDNCAxNS4xNjE4IDQuNDc4MzUgMTMuOTg1OCA1LjI3OTY1IDEzLjIwMTdDNS45Mzk1NCAxMi41NTMgNi43ODMzIDEyLjIwNzcgNy42NTA0IDEyLjIyMTdINy42NTU1NEM3Ljg5MTEgMTIuMjIxNyA4LjQ4MTQ0IDEyLjIxOTUgOS4yNTgyNyAxMi4yMTY2QzkuNjE3MiAxMi4yMTUzIDEwLjAxNTkgMTIuMjEzOCAxMC40Mzc5IDEyLjIxMjRDMTAuODU2NCAxMi4yMTA0IDExLjI5NzUgMTIuMjA4MyAxMS43NDU3IDEyLjIwNjFaIiBmaWxsPSIjODI4MjgyIi8+Cjwvc3ZnPgo="
        />
      </defs>
    </svg>
  </svg>
);

export default memo(MyPage);
