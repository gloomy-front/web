import { MouseEventHandler, CSSProperties } from 'react';

export type SVGIconProps = {
  fill?: string;
  height?: string;
  className?: string;
  onClick?: MouseEventHandler<SVGElement> | undefined;
  style?: CSSProperties;
};

export { default as Heart } from './Heart';
export { default as Comment } from './Comment';
export { default as MyProfile } from './MyProfile';
export { default as Search } from './Search';
export { default as Kakao } from './Kakao';
export { default as Close } from './Close';
export { default as More } from './More';
export { default as Check } from './Check';
export { default as Picture } from './Picture';