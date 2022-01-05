import { SVGIconProps } from '@/components/atoms/Icon/index';
import React, { memo, ReactElement } from 'react';

const MenuOptions = ({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
    <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.23 0C0.550405 0 0 0.550405 0 1.23C0 1.90892 0.550405 2.46 1.23 2.46C1.90959 2.46 2.46 1.90892 2.46 1.23C2.46 0.550405 1.90959 0 1.23 0ZM6.8565 0C6.17691 0 5.62583 0.550405 5.62583 1.23C5.62583 1.90892 6.17691 2.46 6.8565 2.46C7.53542 2.46 8.0865 1.90892 8.0865 1.23C8.0865 0.550405 7.53542 0 6.8565 0ZM11.2523 1.23C11.2523 0.550405 11.8034 0 12.4823 0C13.1619 0 13.713 0.550405 13.713 1.23C13.713 1.90892 13.1619 2.46 12.4823 2.46C11.8034 2.46 11.2523 1.90892 11.2523 1.23Z" fill="#828282"/>
    </svg>

);

export default memo(MenuOptions);