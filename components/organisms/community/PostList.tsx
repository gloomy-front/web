import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { BoardLoading, PostItem } from '@/components/organisms';
import { ApiData, useInfiniteScroll } from '@/hooks/index';
import { Layout } from '@/styles/index';
import { FEED_LIST_SIZE } from '@/constants/index';
import { getFeedList } from '@/api/index';
import { IFeed, FeedListType } from '@/types/index';

const BoundarySection = styled.section`
  ${Layout.flexColStartCenter};
  width: 100%;
  padding-bottom: 57px;
`;

export default function PostList(): JSX.Element {
  const router = useRouter();
  const category = router.query['category'] as string ?? String('ALL');
  const target = useRef<HTMLDivElement>(null);

  const { data: refreshFeeds, loading, setSize } = getFeedList(category);

  const { count, setCount } = useInfiniteScroll({
    target: target,
    targetArray: refreshFeeds[0]?.result.content.length > 0 ? refreshFeeds : [],
    threshold: 0.2,
    pageSize: FEED_LIST_SIZE,
    endPoint: 5
  });

  useEffect(() => {
    const scrollHeight = sessionStorage.getItem('scrollHeight');
    if (scrollHeight && parseInt(scrollHeight) <= (document?.body.scrollHeight ?? 0)) {
      window.scrollTo(0, parseInt(scrollHeight));
      sessionStorage.removeItem('scrollHeight');
    }
  }, [refreshFeeds]);

  useEffect(() => {
    setCount(() => 0);
  }, [category]);

  useEffect(() => {
    if (count > 0) {
      setSize((size: number) => size + 1).then();
    }
  }, [count]);

  return (
    <>
      {
        refreshFeeds[0]?.result?.content.length > 0 &&
        <BoundarySection ref={target}>
          {refreshFeeds.map((feeds: ApiData<FeedListType>) => {
            return feeds.result.content.map((feed: IFeed) => (
              <PostItem key={`category-${category}-${feed.id}`} post={feed}/>));
          })
          }
          {loading && (
            <BoundarySection>
              <BoardLoading/>
            </BoundarySection>
          )}
        </BoundarySection>
      }
    </>
  );
}
