import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Layout } from '@/styles/index';
import { Title, Icon } from '@/components/atoms';
import { AsyncBoundary, MyCommentsLaoding, MyComments, BottomNav, Tab } from '@/components/organisms';
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

const ButtonArea = styled.div`
  cursor: pointer;
`;

export default function MyCommentsTemplate(): JSX.Element {
  const params = useUrlParams({ tab: 'myComments' });
  const router = useRouter();
  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <HeaderNav>
            <Title style={{ fontWeight: 'bold' }}>{'마이페이지'}</Title>
            <ButtonArea onClick={() => router.push('/myPage/setting')}>
              <Icon.Setting height={'25px'} />
            </ButtonArea>
          </HeaderNav>
        </HeaderContainer>
        <Tab initTab={params.tab} />
        <ContentContainer>
          <AsyncBoundary
            pendingFallback={<MyCommentsLaoding />}
            isRefresh={true}
            style={{ height: 'calc(100vh - 140px)' }}
          >
            <MyComments />
          </AsyncBoundary>
        </ContentContainer>
      </MainContainer>
      <BottomNav />
    </>
  );
}
