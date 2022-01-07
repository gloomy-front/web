export const getBrowser = (): string => {
  if (typeof window !== 'undefined') {
    const navigator = window.navigator;
    const agent = navigator.userAgent.toLowerCase();
    if ((navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1) || (agent.indexOf('msie') !== -1)) return 'Explorer Browser';
    if (agent.indexOf('chrome') !== -1) return 'Chrome Browser';
    if (agent.indexOf('safari') !== -1) return 'Safari Browser';
    if (agent.indexOf('firefox') !== -1) return 'FireFox Browser';
  }
  return '기타 브라우저';
};

export const getDevice = (): string => {
  if (typeof window !== 'undefined') {
    const value = window.navigator.userAgent.toLowerCase();
    let result = value.match(/android\s([0-9.]*)/);
    if (result !== null) {
      return 'android';
    }
    result = value.match(/iphone\s([0-9.]*)/);
    if (result !== null) {
      return 'iphone';
    }
  }
  return 'web';
};

export const isApp = () => {
  let isAppInstance = false;

  // check android app
  // @ts-ignore
  if (typeof window !== 'undefined' && window.ReactNativeWebView) {
    isAppInstance = true;
  }

  return isAppInstance;
};

export const serverGetBrowser = (userAgent: string): string => {
  const agent = userAgent.toLowerCase();
  if ((agent.search('Trident') !== -1) || (agent.indexOf('msie') !== -1)) return 'Explorer Browser';
  if (agent.indexOf('chrome') !== -1) return 'Chrome Browser';
  if (agent.indexOf('safari') !== -1) return 'Safari Browser';
  if (agent.indexOf('firefox') !== -1) return 'FireFox Browser';
  return '기타 브라우저';
};

export const serverGetDevice = (useAgent: string): string => {
  const value = useAgent.toLowerCase();
  let result = value.match(/android\s([0-9.]*)/);
  if (result !== null) {
    return 'android';
  }
  result = value.match(/iphone\s([0-9.]*)/);
  if (result !== null) {
    return 'iphone';
  }
  return 'web';
};

export const parseJWT = (token: string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(Buffer.from(base64, 'base64').toString().split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};