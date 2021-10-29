import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { Layout } from '@/styles/index';
import { PopupOverlay } from '@/components/atoms';

const PopupSection = styled.section`
  ${Layout.flexRowCenter};
  width: 100%;
  height: 100vh;
`;

const Loading = (): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const body = document.getElementsByTagName('body')[0];
    body.style['overflow'] = 'hidden';
    body.style['touchAction'] = 'none';

    const mouseMove = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
    };

    body.addEventListener('touchmove', mouseMove);
    body.addEventListener('scroll', mouseMove);
    body.addEventListener('mousewheel', mouseMove);

    return () => {
      body.style['overflow'] = '';
      body.style['touchAction'] = 'auto';
      body.removeEventListener('touchmove', mouseMove);
      body.removeEventListener('scroll', mouseMove);
      body.removeEventListener('mousewheel', mouseMove);

      setMounted(false);
    };
  }, []);

  return mounted ? createPortal((
    <PopupOverlay>
      <PopupSection>
        <svg version="1.1" id="loader-1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50">
          <path fill="#fff"
                d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"/>
          </path>
        </svg>
      </PopupSection>
    </PopupOverlay>
  ), document.getElementsByTagName('body')[0]) : null;
};

export default Loading;
