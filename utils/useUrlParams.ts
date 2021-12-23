export const useUrlParams = (defaultParams: { [key: string]: string }): { [key: string]: string } => {
  const params = defaultParams;

  if (typeof window !== 'undefined') {
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str: string, key, value) => params[key] = value);
  }

  return params;
};
