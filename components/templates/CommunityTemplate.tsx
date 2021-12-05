import styled from 'styled-components';
import { Layout } from '@/styles/index';
import { Title, Icon } from '@/components/atoms';
import { AsyncBoundary, BoardLoading, PostList, Category } from '@/components/organisms';
import { useUrlParams } from '@/utils/index';

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

const ContentContainer = styled.section`
  ${Layout.flexColStartStart};
  width: 100%;
`;

export default function CommunityTemplate(): JSX.Element {
  const params = useUrlParams({ category: 'total' });

  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderNav>
          <Title style={{ fontWeight: 'bold' }}>{'서비스명'}</Title>
          <Icon.Search height={'25px'}/>
        </HeaderNav>
      </HeaderContainer>
      <Category initCategory={params.category}/>
      <ContentContainer>
        <AsyncBoundary
          pendingFallback={<BoardLoading/>}
          isRefresh={true}
          style={{ height: 'calc(100vh - 140px)' }}
        >
          <PostList/>
        </AsyncBoundary>
      </ContentContainer>
    </MainContainer>
  );
}