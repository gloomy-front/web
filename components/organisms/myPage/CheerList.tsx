import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { BoardLoading, CheerItem } from '@/components/organisms';
import { Layout } from '@/styles/theme';

const BoundarySection = styled.section`
  ${Layout.flexColStartCenter};
  width: 100%;
`;

export default function UserList(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <BoundarySection>
          <BoardLoading />
        </BoundarySection>
      ) : (
        <>
          {FAKE_DATA.map((post) => (
            <CheerItem key={post.pk} post={post} />
          ))}
        </>
      )}
    </>
  );
}

const FAKE_DATA = [
  {
    pk: 0,
    title: '욕심많은 바람은 그림자속에2',
    content:
      '평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다',
    likeCount: 5,
    commentCount: 3,
    createdAt: '2021-10-29 17:32',
    color: '#EC0000',
  },
  {
    pk: 1,
    title: '욕심많은 바람은 그림자속에2',
    content:
      '평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다',
    likeCount: 5,
    commentCount: 3,
    createdAt: '2021-10-29 19:32',
    thumbnail: 'http://imagescdn.gettyimagesbank.com/500/20/659/317/0/1221635151.jpg',
    color: '#0047FF',
  },
  {
    pk: 2,
    title: '욕심많은 바람은 그림자속에2',
    content:
      '평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다 평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다',
    likeCount: 5,
    commentCount: 3,
    createdAt: '2021-10-29 23:32',
    color: '#53D768',
  },
  {
    pk: 3,
    title: '욕심많은 바람은 그림자속에2',
    content:
      '평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다',
    likeCount: 5,
    commentCount: 3,
    createdAt: '2021-10-30 17:32',
    thumbnail: 'http://imagescdn.gettyimagesbank.com/500/20/659/317/0/1221635151.jpg',
    color: '#D6BD3D',
  },
  {
    pk: 4,
    title: '욕심많은 바람은 그림자속에2',
    content:
      '평소엔 괜찮은데 인생의 많은 순간들이 나한텐 정신 나갈 것 같은 고통으로 다가오는데 어떻게 이러고 살지. 제대로 살 수 있을까 고쳐지긴 할까 너무 두렵다',
    likeCount: 5,
    commentCount: 3,
    createdAt: '2021-10-30 17:32',
    color: 'purple',
  },
];
