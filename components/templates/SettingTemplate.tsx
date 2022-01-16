import styled from 'styled-components';
import { Layout, COLOR } from '@/styles/index';
import router from 'next/router';
import { Title, Icon, Span } from '@/components/atoms';
import { useUrlParams } from '@/utils/index';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.GRAY02};
`;

const HeaderContainer = styled.header`
  ${Layout.flexRowBetweenCenter};
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
          <Icon.Back onClick={() => router.back()} style={{ cursor: 'pointer', marginLeft: '16px' }} />
          <Title style={{ fontWeight: 'bold' }}>{'설정'}</Title>
          <Icon.Back style={{ cursor: 'pointer', marginRight: '16px', visibility: 'hidden' }} />
        </HeaderContainer>

        <ButtonContainer>
          <Span style={{ fontSize: '15px', marginLeft: '16px', color: COLOR.GRAY07 }}>{'이용약관'}</Span>
          <Icon.ArrowNext
            onClick={() => router.push('/myPage/setting/termsOfUse')}
            style={{ cursor: 'pointer', marginRight: '11px' }}
          />
        </ButtonContainer>
        <ButtonContainer>
          <Span style={{ fontSize: '15px', marginLeft: '16px', color: COLOR.GRAY07 }}>{'개인정보 처리방침'}</Span>
          <Icon.ArrowNext
            onClick={() => router.push('/myPage/setting/privacyPolicy')}
            style={{ cursor: 'pointer', marginRight: '11px' }}
          />
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
