import router from 'next/router';
import styled from 'styled-components';
import { Layout, COLOR } from '@/styles/index';
import { Title, Icon, Span } from '@/components/atoms';
import { stackRouterPush, stackRouterBack } from '@/utils/index';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.GRAY02};
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.WHITE};
  width: 100%;
  height: 56px;
`;

const ButtonContainer = styled.section`
  ${Layout.flexRowBetweenCenter};
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.WHITE};
  margin-top: 1px;
`;

const LogoutButtonContainer = styled.section`
  ${Layout.flexRowBetweenCenter};
  width: 100%;
  height: 48px;
  border-top: ${({ theme }) => `1px solid ${theme.GRAY02}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
  background-color: ${({ theme }) => theme.WHITE};
  margin-top: 8px;
`;

export default function SettingTemplate(): JSX.Element {
  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <Icon.Back onClick={() => stackRouterBack(router)} style={{ cursor: 'pointer', marginLeft: '16px' }} />
          <Title
            style={{
              fontWeight: 'bold',
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%)',
            }}
          >
            {'설정'}
          </Title>
        </HeaderContainer>
        <ButtonContainer onClick={() => stackRouterPush(router, '/myPage/setting/termsOfUse')}>
          <Span style={{ fontSize: '15px', marginLeft: '16px', color: COLOR.GRAY07 }}>{'이용약관'}</Span>
          <Icon.ArrowNext style={{ cursor: 'pointer', marginRight: '11px' }} />
        </ButtonContainer>
        <ButtonContainer onClick={() => stackRouterPush(router, '/myPage/setting/privacyPolicy')}>
          <Span style={{ fontSize: '15px', marginLeft: '16px', color: COLOR.GRAY07 }}>{'개인정보 처리방침'}</Span>
          <Icon.ArrowNext style={{ cursor: 'pointer', marginRight: '11px' }} />
        </ButtonContainer>
        <ButtonContainer>
          <Span style={{ fontSize: '15px', marginLeft: '16px', color: COLOR.GRAY07 }}>{'버전'}</Span>
          <Span style={{ cursor: 'pointer', marginRight: '16px', color: COLOR.GRAY05 }}>{'1.2'}</Span>
        </ButtonContainer>
        <LogoutButtonContainer>
          <Span style={{ fontSize: '15px', marginLeft: '16px', color: COLOR.GRAY07 }}>{'로그아웃'}</Span>
        </LogoutButtonContainer>
      </MainContainer>
    </>
  );
}
