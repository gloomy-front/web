import styled from 'styled-components';
import { COLOR, Layout } from '@/styles/index';
import { Title, Span, Icon } from '@/components/atoms';
import { AsyncBoundary, BoardLoading, PostList } from '@/components/organisms';

const MainContainer = styled.main`
  ${Layout.flexColStartStart};
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;

  position: relative;
  background-color: ${({ theme }) => theme.BLACK};
`;

const HeaderContainer = styled.header`
  ${Layout.flexColStartCenter};
  width: 100%;
  box-sizing: border-box;
  height: 125px;
  background-color: #051248;
  padding: 11px 14px 0 11px;
`;

const HeaderNav = styled.section`
  ${Layout.flexRowBetweenCenter};
  width: 100%;
  height: 40px;
`;

const HeaderButtonArea = styled.div`
  ${Layout.flexRowCenter}
`;

const HeaderMain = styled.section`
  ${Layout.flexRowStartCenter};
  width: 100%;
  height: 45px;
  margin-top: 5px;
  padding-left: 3px;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 38px;
  height: 38px;
  background-color: ${({ theme }) => theme.GRAY01};
`;

const InputBox = styled.div`
  ${Layout.flexRowStartCenter};
  width: calc(100% - 48px);
  height: 47px;
  margin-left: 8px;
  padding-left: 13px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.WHITE};
`;

const ContentContainer = styled.section`
  ${Layout.flexColStartStart};
  width: 100%;
`;

export default function CommunityTemplate(): JSX.Element {
  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderNav>
          <Title>{'Grooming'}</Title>
          <HeaderButtonArea>
            <Icon.MyProfile height={'24px'} style={{ marginRight: '10px' }}/>
            <Icon.Search height={'28px'}/>
          </HeaderButtonArea>
        </HeaderNav>
        <HeaderMain>
          <Circle/>
          <InputBox>
            <Span style={{ color: COLOR.BLACK, fontWeight: 500 }}>{'나누고 싶은 생각이 있으신가요?'}</Span>
          </InputBox>
        </HeaderMain>
      </HeaderContainer>
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