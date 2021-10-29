import { MouseEventHandler } from 'react';

export type SVGIconProps = {
  fill?: string;
  height?: string;
  className?: string;
  onClick?: MouseEventHandler<SVGElement> | undefined;
};

export { default as Heart } from './Heart';
export { default as Comment } from './Comment';