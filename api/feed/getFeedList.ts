import useSWRInfinite from 'swr/infinite';

import { IFeed } from '@/types/index';
import { ApiData, getWithToken } from '@/utils/index';

export type FeedListType = {
  content: Array<IFeed>;
};

export const getFeedList = () => {
  const getKey = (pageIndex: number, previousPageData: null | ApiData<FeedListType>) => {
    if (previousPageData && !previousPageData.result.content.length) return null;
    return `/feed?page=${pageIndex}&sort=date`;
  };

  const { data, size, isValidating, setSize, mutate } = useSWRInfinite<ApiData<FeedListType>>(getKey, getWithToken,
    {
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
      suspense: false
    });

  return {
    data: data ?? [],
    loading: !data || isValidating,
    setSize,
    size,
    mutate
  };
};
