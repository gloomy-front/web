import useSWR, { mutate } from 'swr';
import { getWithoutToken } from '@/utils/index';

export const COMMUNITY_COMMENT = 'COMMUNITY_COMMENT';

export const generateGetCommentKey = (): string => {
  return '/feed?page=0';
};

export const mutateGetComment = () => (mutate(COMMUNITY_COMMENT));

export const getComment = () => {
  const { data } = useSWR(COMMUNITY_COMMENT, () => getWithoutToken<any>(generateGetCommentKey()),
    {
      refreshWhenOffline: false,
      refreshWhenHidden: false,
      refreshInterval: 0,
      suspense: true
    });

  return {
    data: data ? data.data : []
  };
};