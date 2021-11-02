import img from 'next/image';
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

const TextContainer = styled.section`
  ${Layout.flexRowStartCenter};
  width: 100%;
  height: 45px;
  margin-top: 25%;
  padding-left: 8%;
`;

const LoginButtonContainer = styled.section`
  ${Layout.flexRowStartCenter};
  width: 100%;
  height: 45px;
  margin-top: 80%;
`;

export default function LoginTemplate(): JSX.Element {
  const jsKey = '473b1a6bbe9f9cceeffa8a5a384fae27';
  const kakaoScript = document.createElement('script');
  kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.js';
  document.head.appendChild(kakaoScript);

  const kakaoLoign = () => {
    window.Kakao.init('473b1a6bbe9f9cceeffa8a5a384fae27');
    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/kakao/signUp',
    });
  };

  //   const loginWithKakao = () => {
  //     console.log('hello');
  //     window.Kakao.Auth.authorize({
  //       redirectUri: 'http://localhost:3000/kakao/signUp',
  //     });
  //   };

  return (
    <MainContainer>
      <TextContainer>
        <Title size="h1">
          {'감정이'}
          <br /> {'말랑해지는 순간을'}
          <br />
          {'그루밍에서 경험하세요'}
        </Title>
      </TextContainer>
      <LoginButtonContainer onClick={kakaoLoign}>
        <img alt="kakaoLogin" src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" />
      </LoginButtonContainer>
    </MainContainer>
  );
}
