import { MyCommentsLaoding, MyCommentsItem } from '@/components/organisms';
import { useInfiniteScroll } from '@/hooks/index';
import { Layout } from '@/styles/theme';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const BoundarySection = styled.section`
  ${Layout.flexColStartCenter};
  width: 100%;
`;

export default function MyCommentsList(): JSX.Element {
  const target = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [myCommentsList, setMyCommentsList] = useState<Array<any>>([]);

  const { count } = useInfiniteScroll({
    target: target,
    targetArray: myCommentsList,
    threshold: 0.2,
    pageSize: 5,
    endPoint: 3,
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setMyCommentsList([...myCommentsList, ...FAKE_DATA]);
      setIsLoading(false);
    }, 1000);
  }, [count]);

  return (
    <>
      <section ref={target}>
        {myCommentsList.map((post, idx) => (
          <MyCommentsItem key={idx} post={post} />
        ))}
      </section>
      {isLoading && (
        <BoundarySection>
          <MyCommentsLaoding />
        </BoundarySection>
      )}
    </>
  );
}

const FAKE_DATA = [
  {
    pk: 0,
    title: '나 아까 노티드 도넛 먹고 우울한게 좀.',
    comments: '힘내',
    content:
      '안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코푸딩도넛 품절 아니길래 잽싸게 사먹었다 ...',
    likeCount: 5,
    commentCount: 3,
    createdAt: '2021-10-29 17:32',
    color: '#EC0000',
    category: '잡담',
  },
  {
    pk: 1,
    title: '나 아까 노티드 도넛 먹고 우울한게 좀..',
    comments: '벌써 한해가 다 갔다니 한 해동안 뭐한걸까 ㅠ',
    content:
      '안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코푸딩도넛 품절 아니길래 잽싸게 사먹었다 ...',
    likeCount: 5,
    commentCount: 3,
    createdAt: '2021-10-29 19:32',
    thumbnail: 'http://imagescdn.gettyimagesbank.com/500/20/659/317/0/1221635151.jpg',
    color: '#0047FF',
    category: '잡담',
  },
  {
    pk: 2,
    title: '나 아까 노티드 도넛 먹고 우울한게 좀..',
    comments: '벌써 한해가 다 갔다니 한 해동안 뭐한걸까 ㅠ',
    content:
      '안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코푸딩도넛 품절 아니길래 잽싸게 사먹었다 ... 안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코푸딩도넛 품절 아니길래 잽싸게 사먹었다 ...',
    likeCount: 5,
    commentCount: 3,
    createdAt: '2021-10-29 23:32',
    color: '#53D768',
    category: '잡담',
  },
  {
    pk: 3,
    title: '나 아까 노티드 도넛 먹고 우울한게 좀..',
    comments: '벌써 한해가 다 갔다니 한 해동안 뭐한걸까 ㅠ',
    content:
      '안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코푸딩도넛 품절 아니길래 잽싸게 사먹었다 ...',
    likeCount: 5,
    commentCount: 3,
    createdAt: '2021-10-30 17:32',
    thumbnail: 'http://imagescdn.gettyimagesbank.com/500/20/659/317/0/1221635151.jpg',
    color: '#D6BD3D',
    category: '잡담',
  },
  {
    pk: 4,
    title: '나 아까 노티드 도넛 먹고 우울한게 좀..',
    comments: '벌써 한해가 다 갔다니 한 해동안 뭐한걸까 ㅠ',
    content:
      '안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코푸딩도넛 품절 아니길래 잽싸게 사먹었다 ...',
    likeCount: 5,
    commentCount: 3,
    createdAt: '2021-10-30 17:32',
    color: 'purple',
    category: '잡담',
  },
  {
    pk: 5,
    title: '나 아까 노티드 도넛먹고 우울한게 좀 나아졌어',
    comments: '노티드 도넛 맛있어? 나도 먹어보고 싶다. 달다구리한거 먹고 힘내!! 아자아자~~~',
    content:
      '아까 안국역쪽 들렀는데 거기 웨이팅이 별로 없대? 그래서 들어가니까 초코 푸딩도넛 품절 아니길래 잽싸게 사먹었다 휴 역시 달달한게 우울에는 직빵인듯 힘내자 내자신아 너네들도 힘내라',
    likeCount: 4,
    commentCount: 4,
    createdAt: '2021-10-30 17:32',
    thumbnail: 'http://imagescdn.gettyimagesbank.com/500/20/659/317/0/1221635151.jpg',
    color: 'purple',
    category: '직장/이직',
  },
];
