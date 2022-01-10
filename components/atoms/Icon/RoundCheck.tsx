import React, { memo, ReactElement } from 'react';
import { SVGIconProps } from './';

const RoundCheck = ({ fill = '#000', height = '24px', onClick, style }: SVGIconProps): ReactElement => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7ZM14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM10.4696 5.71997C10.8365 5.30718 10.7994 4.67511 10.3866 4.30819C9.97379 3.94128 9.34171 3.97846 8.97479 4.39124L6.49443 7.18165L5.29134 6.21918C4.86008 5.87417 4.23079 5.94409 3.88578 6.37535C3.54077 6.80661 3.61069 7.43591 4.04195 7.78092L5.9864 9.33647C6.40192 9.66889 7.00498 9.61768 7.3585 9.21997L10.4696 5.71997Z"
      fill="#BDBDBD"
    />
  </svg>
);

export default memo(RoundCheck);
