import { mutate } from 'swr';
import useSWRImmutable from 'swr/immutable';

import { ApiReturn, getWithToken } from '@/utils/index';
import { IFeed } from '@/types/index';

export const generateGetUserDetailKey = (): string => {
  return '/user/detail';
};

export const mutateGetUserDetail = () => {
  return mutate(generateGetUserDetailKey());
};

export const fetchGetUserDetail = () => {
  return getWithToken<IFeed>(generateGetUserDetailKey());
};

export const useGetUserDetail = () => {
  const { data } = useSWRImmutable<ApiReturn<IFeed>>(generateGetUserDetailKey(),
    (() => fetchGetUserDetail()),
    {
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0
    });

  return {
    data: data?.result ?? {
      id: 0,
      email: ''
    }
  };
};