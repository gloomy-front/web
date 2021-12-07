import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Layout } from '@/styles/index';
import { Title, Icon } from '@/components/atoms';
import { AsyncBoundary, BoardLoading, PostList, BottomNav } from '@/components/organisms';

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

const CategorySection = styled.section`
  ${Layout.flexRowBetweenCenter};
  width: 100%;
  height: 57px;

  background-color: ${({ theme }) => theme.GRAY02};
`;

const ContentContainer = styled.section`
  ${Layout.flexColStartStart};
  width: 100%;
`;

export default function CommunityTemplate(): JSX.Element {
  const router = useRouter();

  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <HeaderNav>
            <Title style={{ fontWeight: 'bold' }}>{'서비스명'}</Title>
            <Icon.Search height={'25px'} />
          </HeaderNav>
        </HeaderContainer>
        <CategorySection />
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
