import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLOR, Layout } from '@/styles/index';
import { Title, Span, Icon } from '@/components/atoms';
import { Loading } from '@/components/molcules';
import { KAKAO_KEY } from '@/constants/index';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #FEFEDF;
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

declare const window: Window &
  typeof globalThis & {
  Kakao: any;
};

export default function LoginTemplate(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const kakaoScript = document.createElement('script');
    kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    document.head.appendChild(kakaoScript);
  }, []);

  const kakaoLogin = () => {
    setIsLoading(false);
    window.Kakao.init(KAKAO_KEY);
    window.Kakao.Auth.authorize({
      redirectUri: `${window.location.origin}/kakao/signUp`,
    });
    setIsLoading(true);
  };

  return (
    <MainContainer>
      <TextArea>
        <Span style={{ fontSize: '16px', marginBottom: '12px' }}>{'슬펐던 일, 답답한 고민 모두'}</Span>
        <Title style={{ lineHeight: 1.5, fontSize: '32px', fontWeight: 700 }}>{'고밍아웃'}</Title>
      </TextArea>
      <img
        src={'https://gloomy-static-image.s3.ap-northeast-2.amazonaws.com/Intro_image.png'}
        alt={''}
        style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
      />
      <LoginButtonSection>
        <LoginButtonArea onClick={kakaoLogin}>
          <Icon.Kakao style={{ position: 'absolute', left: '30px' }} height={'32px'}/>
          <Span style={{ fontSize: '16px', display: 'block', width: '100%', textAlign: 'center' }}>{'카카오 로그인'}</Span>
        </LoginButtonArea>
        <Span style={{ color: COLOR.GRAY05, marginTop: '13px' }}>
          {'시작하면 '}
          <Span style={{ color: COLOR.GRAY05, textDecoration: 'underline' }}>{'이용약관'}</Span>
          {' 및 '}
          <Span style={{ color: COLOR.GRAY05, textDecoration: 'underline' }}>{'개인정보취급방침'}</Span>
          {'에 동의하게 됩니다.'}
        </Span>
      </LoginButtonSection>
      {isLoading ? <></> : <Loading/>}
    </MainContainer>
  );
}
