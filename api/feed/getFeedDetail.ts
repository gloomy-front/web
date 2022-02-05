import { mutate } from 'swr';
import useSWRImmutable from 'swr/immutable';

import { ApiReturn, getWithToken } from '@/utils/index';
import { IFeed } from '@/types/index';

export const generateGetFeedDetailKey = (feedId: number): string => {
  return `/feed/${feedId}`;
};

export const mutateGetFeedDetail = (feedId: number) => {
  return mutate(generateGetFeedDetailKey(feedId));
};

export const fetchGetFeedDetail = (feedId: number) => {
  return getWithToken<IFeed>(generateGetFeedDetailKey(feedId));
};

export const useGetFeedDetail = (feedId: number) => {
  const { data } = useSWRImmutable<ApiReturn<IFeed>>(
    feedId === 0 ? null : generateGetFeedDetailKey(feedId),
    (() => fetchGetFeedDetail(feedId)),
    {
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0
    });

  return {
    data: data?.result ?? {
      id: 0,
      userId: null,
      nickname: '',
      category: 'ALL',
      title: '',
      content: '',
      imageURLs: [],
      likeCount: 0,
      commentCount: 0,
      createdAt: '2022-02-05T11:50:57.862019'
    }
  };
};