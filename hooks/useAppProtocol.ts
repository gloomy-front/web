import {
  REQ_GET_APP_VERSION,
  REQ_GET_TARGET_URL,
  REQ_PERMISSION_CHECK,
  REQ_PERMISSION_REQ,
  REQ_POST_TARGET_URL,
  REQ_GET_DEVICE_UUID,
  REQ_OPEN_SETTING,
  REQ_VIBRATION,
  REQ_ALL_PERMISSION_REQ,
  REQ_ALL_PERMISSION_CHECK,
  REQ_POST_EXTERNAL_URL,
  REQ_GET_EXTERNAL_URL,
  REQ_NOTI_PERMISSION_REQ,
  REQ_NOTI_PERMISSION_CHECK,
  REQ_GET_FCM_TOKEN,
  REQ_MULTI_PERMISSION_CHECK,
  REQ_MULTI_PERMISSION_REQ
} from '@/types/index';

const postMessageToApp = ({ type, data = {}}: { type: string, data?: any }): void => {
  // @ts-ignore
  if (typeof window !== 'undefined' && window.ReactNativeWebView) {
    // @ts-ignore
    window.ReactNativeWebView.postMessage(JSON.stringify({ 'type': type, 'data': data }));
  } else {
    alert('앱에서 실행해주세요.');
  }
};

type EventOption = {
  action?: string;
  label?: string;
  value?: number;
  attributes?: {
    [key: string]: string;
  };
  semantics?: {
    [key: string]: any;
  };
};

export interface IEventProps {
  category: string;
  eventOption?: EventOption;
}

export const checkAllPermission = (): void => {
  setTimeout(() => {
    postMessageToApp({ type: REQ_ALL_PERMISSION_CHECK });
  }, 100);
};

export const requestAllPermission = (): void => {
  setTimeout(() => {
    postMessageToApp({ type: REQ_ALL_PERMISSION_REQ });
  }, 100);
};

export const checkMultiPermission = ({ permissionTypeList }: { permissionTypeList: string[] }): void => {
  setTimeout(() => {
    postMessageToApp({ type: REQ_MULTI_PERMISSION_CHECK, data: { permissionTypeList } });
  }, 100);
};

export const requestMultiPermission = ({ permissionTypeList }: { permissionTypeList: string[] }): void => {
  setTimeout(() => {
    postMessageToApp({ type: REQ_MULTI_PERMISSION_REQ, data: { permissionTypeList } });
  }, 100);
};

export const checkPermission = ({ permissionType }: { permissionType: string }): void => {
  setTimeout(() => {
    postMessageToApp({ type: REQ_PERMISSION_CHECK, data: { permissionType } });
  }, 100);
};

export const requestPermission = ({ permissionType }: { permissionType: string }): void => {
  setTimeout(() => {
    postMessageToApp({ type: REQ_PERMISSION_REQ, data: { permissionType } });
  }, 100);
};

export const checkNotiPermission = (): void => {
  setTimeout(() => {
    postMessageToApp({ type: REQ_NOTI_PERMISSION_CHECK, data: {} });
  }, 100);
};

export const requestNotiPermission = (): void => {
  setTimeout(() => {
    postMessageToApp({ type: REQ_NOTI_PERMISSION_REQ, data: {} });
  }, 100);
};

export const requestFCMToken = (): void => {
  setTimeout(() => {
    postMessageToApp({ type: REQ_GET_FCM_TOKEN, data: {} });
  }, 100);
};

export const changeTargetUrl = ({ targetUrl }: { targetUrl: string }): void => {
  postMessageToApp({ type: REQ_POST_TARGET_URL, data: { targetUrl } });
};

export const getTargetUrl = (): void => {
  postMessageToApp({ type: REQ_GET_TARGET_URL });
};

export const getAppVersion = (): void => {
  postMessageToApp({ type: REQ_GET_APP_VERSION });
};

export const getDeviceId = (): void => {
  postMessageToApp({ type: REQ_GET_DEVICE_UUID });
};

export const moveToOption = (): void => {
  postMessageToApp({ type: REQ_OPEN_SETTING });
};

export const requestVibrate = (): void => {
  postMessageToApp({ type: REQ_VIBRATION });
};

export const getExternalUrlList = (): void => {
  postMessageToApp({ type: REQ_GET_EXTERNAL_URL });
};

export const requestExternalUrl = ({ targetUrl }: { targetUrl: string }): void => {
  postMessageToApp({ type: REQ_POST_EXTERNAL_URL, data: { targetUrl } });
};
