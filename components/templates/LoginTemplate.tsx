import { useState } from 'react';
import img from 'next/image';
import styled from 'styled-components';
import { COLOR, Layout } from '@/styles/index';
import { Title, Span, Icon } from '@/components/atoms';
import { Loading } from '@/components/molcules';

const MainContainer = styled.main`
  ${Layout.flexColStartStart};
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: ${({ theme }) => theme.BLACK};
`;

const TextArea = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
  height: 45px;
  margin-top: 25%;
  left-padding: 8%;
`;

const LoginButtonArea = styled.section`
  ${Layout.flexRowStartCenter};
  width: fit-content;
  margin: auto;
  text-align: center;
`;

declare const window: Window &
  typeof globalThis & {
    Kakao: any;
  };

export default function LoginTemplate(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const kakaoLoign = () => {
    setIsLoading(false);
    const kakaoScript = document.createElement('script');
    kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    document.head.appendChild(kakaoScript);
    setTimeout(() => {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
      window.Kakao.Auth.authorize({
        redirectUri: 'http://localhost:3000/kakao/signUp',
      });
    }, 1000);
  };

  return (
    <MainContainer>
      <TextArea>
        <Title size="h1">
          {'감정이'}
          <br /> {'말랑해지는 순간을'}
          <br />
          {'그루밍에서 경험하세요'}
        </Title>
      </TextArea>
      <LoginButtonArea onClick={kakaoLoign}>
        <img alt="kakaoLogin" src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" />
      </LoginButtonArea>
      {isLoading ? <></> : <Loading />}
    </MainContainer>
  );
}
