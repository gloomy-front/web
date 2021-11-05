import { useCallback, useEffect, useMemo } from 'react';
import { v4 } from 'uuid';

const useBlockScroll = (): void => {
  const bodyBlockClass = useMemo<string>(() => `z-${v4().split('-')[0]}`, []);

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    const blockStyle = document.createElement('style');
    blockStyle.type = 'text/css';
    blockStyle.innerHTML = `.${bodyBlockClass} { overflow: hidden; }`;

    document.getElementsByTagName('head')[0].insertAdjacentElement('beforeend', blockStyle);
    body.classList.add(bodyBlockClass);

    const mouseMove = (e: { currentTarget: EventTarget | null, stopPropagation: () => void; }) => {
      if (!preventMomentumScroll(e.currentTarget)) {
        e.stopPropagation();
      }
    };

    const scrollMove = (e: { currentTarget: EventTarget | null, preventDefault: () => void; }) => {
      preventMomentumScroll(e.currentTarget);
    };

    body.addEventListener('touchmove', mouseMove);
    body.addEventListener('scroll', scrollMove);
    body.addEventListener('mousewheel', scrollMove);

    return () => {
      blockStyle.remove();
      body.classList.remove(bodyBlockClass);
      body.removeEventListener('touchmove', mouseMove);
      body.removeEventListener('scroll', scrollMove);
      body.removeEventListener('mousewheel', scrollMove);
    };
  }, []);

  const preventMomentumScroll = useCallback((el) => {
    const { scrollTop, offsetHeight, scrollHeight } = el;
    if (scrollTop === 0) {
      el.scrollTo(0, 1);
      return true;
    }
    if (scrollTop + offsetHeight >= scrollHeight) {
      el.scrollTo(0, scrollHeight - offsetHeight - 1);
      return true;
    }
    return false;
  }, []);
};

export default useBlockScroll;
