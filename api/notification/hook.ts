import useSWR from 'swr';
import { getNotification } from '.';

const generateNotificationKey = () => `/notification`;
export const useNotification = () => {
  const { data, error } = useSWR(generateNotificationKey(), getNotification, {
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
    suspense: true,
  });
  return {
    notification: data ?? [],
    isLoading: !error && !data,
    isError: error,
  };
};
