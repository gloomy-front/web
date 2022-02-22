import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { COLOR, Layout } from '@/styles/index';
import { KAKAO_KEY } from '@/constants/index';

import { checkPermission } from '@/hooks/index';
import { isApp, isIphone } from '@/utils/index';

import { Title, Span, Icon } from '@/components/atoms';
import { Loading, Popup } from '@/components/molcules';
import { LoginProps } from '@/pages/kakao/login';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #fefedf;
`;

const TextArea = styled.div`
  ${Layout.flexColCenter};
  padding-top: 32px;
  width: 100%;
`;

const LoginButtonSection = styled.div`
  ${Layout.flexColCenter};
  width: 100%;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const LoginButtonArea = styled.div`
  ${Layout.flexRowCenter};
  background-color: ${({ theme }) => theme.KAKAO_YELLOW};
  width: calc(100% - 34px);
  max-width: 566px;
  height: 49px;
  border-radius: 10px;
  cursor: pointer;
`;
const PopUpContainer = styled.div`
  padding: 20px;
`;

const PopUpContent = styled.p`
  font-size: 14px;
  margin: 8px;
  color: ${({ theme }) => theme.GRAY05};
`;

const TitleDiv = styled.div`
  ${Layout.flexRowStartCenter}
`;

declare const window: Window &
  typeof globalThis & {
    Kakao: any;
  };

export default function LoginTemplate({ error }: LoginProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  useEffect(() => {
    if (error) {
      setIsOpenPopup(true);
    }
  }, []);
  useEffect(() => {
    if (isApp() && isIphone()) {
      checkPermission({ permissionType: 'ATT' });
    }

    const kakaoScript = document.createElement('script');
    kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    document.head.appendChild(kakaoScript);
  }, []);

  const kakaoLogin = () => {
    setIsLoading(true);
    window.Kakao.init(KAKAO_KEY);
    window.Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}/kakao/signUp`,
    });
    setIsLoading(false);
  };

  return (
    <MainContainer>
      <TextArea>
        <Span style={{ fontSize: '16px', marginBottom: '6px' }}>{'슬펐던 일, 답답한 고민 모두'}</Span>
        <TitleDiv>
          <Title style={{ color: 'black', fontSize: '28px', fontWeight: 800, fontFamily: 'Gowun Dodum' }}>
            {'고밍아웃'}
          </Title>
          <Icon.GomingOut height={'35px'} style={{ marginBottom: '14px', marginLeft: '5px' }} />
        </TitleDiv>
      </TextArea>
      <img
        src={'https://gloomy-static-image.s3.ap-northeast-2.amazonaws.com/Intro_image.png'}
        alt={''}
        style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
      />
      <LoginButtonSection>
        <LoginButtonArea onClick={kakaoLogin}>
          <Icon.Kakao style={{ position: 'relative', left: '30px' }} height={'22px'} />
          <Span
            style={{
              fontSize: '16px',
              display: 'block',
              width: '100%',
              textAlign: 'center',
              marginRight: '10px',
            }}
          >
            {'카카오로 로그인'}
          </Span>
        </LoginButtonArea>
        <Span style={{ color: COLOR.GRAY05, fontSize: '12px', marginTop: '13px' }}>
          {'시작하면 '}
          <Span style={{ color: COLOR.GRAY05, fontSize: '12px', textDecoration: 'underline' }}>{'이용약관'}</Span>
          {' 및 '}
          <Span style={{ color: COLOR.GRAY05, fontSize: '12px', textDecoration: 'underline' }}>
            {'개인정보취급방침'}
          </Span>
          {'에 동의하게 됩니다.'}
        </Span>
      </LoginButtonSection>
      {isOpenPopup && (
        <Popup
          type="ONE"
          useClose={false}
          successTitle={'다시시도'}
          successCallback={() => {
            setIsOpenPopup(false);
            kakaoLogin();
          }}
        >
          <PopUpContainer>
            <Title style={{ fontSize: '24px', marginBottom: '10px' }}>{'로그인 실패'}</Title>
            <PopUpContent> {error}</PopUpContent>

            <PopUpContent style={{ fontSize: '12px' }}>* 이 내용은 카카오톡 서버에서 발송되었습니다</PopUpContent>
          </PopUpContainer>
        </Popup>
      )}
    </MainContainer>
  );
}
