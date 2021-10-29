import React, { CSSProperties } from 'react';
import styled, { keyframes } from 'styled-components';

const skeletonKeyframe = keyframes`
  0% {
    transform: translateX(-100px);
  }
  100% {
    transform: translateX(100vw);
  }
`;

const SkeletonW = styled.span`
  position: relative;
  width: 100%;

  background-color: #eee;
  border-radius: 15px;
  display: inline-block;
  line-height: 1;

  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #fff, #f2f2f2);
    animation: ${skeletonKeyframe} 1.2s ease-in-out infinite;
  }
`;

type SkeletonProps = {
  count?: number;

  width?: string | number;
  height?: string | number;

  circle?: boolean;
  style?: CSSProperties;
  className?: string;
}

export default function Skeleton (
  {
    count = 1,
    width = '100%',
    height = '30px',
    circle = false,
    style
  }: SkeletonProps): JSX.Element {
  const elements: Array<JSX.Element> = [];

  for (let i = 0; i < count; i++) {
    const initStyle = {};

    if (width != -1) {
      // @ts-ignore
      initStyle['width'] = width;
    }

    if (height != null) {
      // @ts-ignore
      initStyle['height'] = height;
    }

    if (width !== -1 && height !== -1 && circle) {
      // @ts-ignore
      initStyle['borderRadius'] = '50%';
    }

    elements.push(
      <SkeletonW key={i} style={{ ...initStyle, ...style }}/>
    );
  }

  return (
    <>
      {
        elements.map((element) => element)
      }
    </>
  );
}
