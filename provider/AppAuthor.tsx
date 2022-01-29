import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

import {
  REQ_PERMISSION_CHECK,
  RES_ALL_PERMISSION_CHECK,
  RES_ALL_PERMISSION_REQ,
  RES_MULTI_PERMISSION_CHECK,
  RES_MULTI_PERMISSION_REQ,
  RES_PERMISSION_CHECK,
  RES_PERMISSION_REQ,
  RES_NOTI_PERMISSION_CHECK,
  RES_NOTI_PERMISSION_REQ
} from '@/types/index';

type RESULTS =
  'unavailable'/* 사용불가 */
  | 'blocked'/* 거부 다시 요청 못함 */
  | 'denied'/* 거부 다시 요청 가능*/
  | 'granted'/* 승인 */
  | 'limited'/* 제한적 승인 */
  | 'empty'/* 초기값*/;

interface IAuthData {
  CAMERA: RESULTS,
  PHOTO: RESULTS,
  ATT: RESULTS,
  NOTI: RESULTS
}

export const initAuthData: IAuthData = { 'CAMERA': 'empty', 'PHOTO': 'empty', 'ATT': 'empty', 'NOTI': 'empty' };

export const AppAuthorContext = createContext<IAuthData>(initAuthData);
export const AppAuthorNextCallbackContext = createContext<Dispatch<SetStateAction<() => void>>>(() => null);

export const useAppProtocol = (): { authData: IAuthData, setNextCallback: Dispatch<SetStateAction<() => void>> } => {
  const [authData, setAuthData] = useState<IAuthData>(initAuthData);
  const [nextCallback, setNextCallback] = useState<(e?: any) => void>(() => () => null);

  // @ts-ignore
  const responseCallback = ({ result, status }) => {
    if (status === 'success') {
      if (result.length > 0) {
        setAuthData((prevData) => ({
          // @ts-ignore
          ...prevData, ...result.reduce((acc, { type, msgType }) => {
            return {
              ...acc,
              [type]: msgType
            };
          }, {})
        }));
      } else {
        setAuthData((prevData) => ({ ...prevData, [result.type]: result.msgType }));
      }

      nextCallback({ ...authData, [result.type]: result.msgType });
      setNextCallback(() => () => null);
    }
  };

  const handleAppProtocol = (e: any) => {
    let message;
    try {
      if (!e.isTrusted) {
        message = JSON.parse(e.data);
      } else {
        return;
      }
    } catch (err) {
      return;
    }

    const { type, data } = message;

    if (
      type === REQ_PERMISSION_CHECK ||
      type === RES_PERMISSION_CHECK ||
      type === RES_PERMISSION_REQ ||
      type === RES_MULTI_PERMISSION_CHECK ||
      type === RES_MULTI_PERMISSION_REQ ||
      type === RES_ALL_PERMISSION_CHECK ||
      type === RES_ALL_PERMISSION_REQ ||
      type === RES_NOTI_PERMISSION_CHECK ||
      type === RES_NOTI_PERMISSION_REQ
    ) {
      console.log(type);
      console.log(data);
      responseCallback(data);
    }
  };

  useEffect(() => {
    //@ts-ignore
    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      const userAgent = window.navigator.userAgent.toLowerCase();

      if (userAgent.match(/android\s([0-9.]*)/) !== null) {
        // @ts-ignore
        document.addEventListener('message', handleAppProtocol);
      } else if (userAgent.match(/iphone\s([0-9.]*)/) !== null) {
        // @ts-ignore
        window.addEventListener('message', handleAppProtocol);
      }
    }

    return () => {
      //@ts-ignore
      if (typeof window !== 'undefined' && window.ReactNativeWebView) {
        const userAgent = window.navigator.userAgent.toLowerCase();

        if (userAgent.match(/android\s([0-9.]*)/) !== null) {
          // @ts-ignore
          document.removeEventListener('message', handleAppProtocol);
        } else if (userAgent.match(/iphone\s([0-9.]*)/) !== null) {
          // @ts-ignore
          window.removeEventListener('message', handleAppProtocol);
        }
      }
    };
  }, [nextCallback]);

  return { authData, setNextCallback };
};
