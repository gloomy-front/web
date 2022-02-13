import styled from 'styled-components';
import { Layout } from '@/styles/index';
import { Title, Icon } from '@/components/atoms';
import { AsyncBoundary, BoardLoading, PostList, BottomNav, Category } from '@/components/organisms';
import { useUrlParams } from '@/utils/index';
import { useRouter } from 'next/router';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.WHITE};
`;

const HeaderContainer = styled.header`
  ${Layout.flexColStartCenter};
  width: 100%;
  box-sizing: border-box;
  padding: 25px 16px 9px;
`;

const HeaderNav = styled.section`
  ${Layout.flexRowBetweenCenter};
  width: 100%;
`;

const HeaderDiv = styled.div`
  ${Layout.flexRowStartCenter}
`;

const ContentContainer = styled.section`
  ${Layout.flexColStartStart};
  width: 100%;
`;

export default function CommunityTemplate(): JSX.Element {
  const params = useUrlParams({ category: 'ALL' });
  const router = useRouter();

  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <HeaderNav>
            <HeaderDiv>
              <Title style={{ fontWeight: 'bold', marginRight: '2px', fontFamily: 'Gowun Dodum', color: 'black' }}>
                {'고밍아웃'}
              </Title>
              <Icon.GomingOut height={'18px'} style={{ marginBottom: '7px' }} />
            </HeaderDiv>
            <HeaderDiv>
              <Icon.Bell
                height={'18px'}
                style={{ marginRight: '14px', cursor: 'pointer' }}
                onClick={() => router.push('/notification')}
              />
              <Icon.Search height={'18px'} />
            </HeaderDiv>
          </HeaderNav>
        </HeaderContainer>
        <Category initCategory={params.category} />
        <ContentContainer>
          <AsyncBoundary pendingFallback={<BoardLoading />} isRefresh={true} style={{ height: 'calc(100vh - 140px)' }}>
            <PostList />
          </AsyncBoundary>
        </ContentContainer>
      </MainContainer>
      <BottomNav />
    </>
  );
}
