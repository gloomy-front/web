import { NextRouter } from 'next/router';
import { sendRouterEvent } from '@/hooks/useAppProtocol';
import { isApp } from './device';

export const stackRouterBack = (router: NextRouter) => {
  if (isApp()) {
    sendRouterEvent('back');
  } else {
    router.back();
  }
};

export const stackRouterPush = (router: NextRouter, url: string) => {
  if (isApp()) {
    sendRouterEvent(url);
  } else {
    router.push(url).then();
  }
};