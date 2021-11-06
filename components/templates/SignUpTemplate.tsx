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

export default function SingUpTemplate(): JSX.Element {
  return <MainContainer>signUp화면</MainContainer>;
}
