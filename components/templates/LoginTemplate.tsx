import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLOR, Layout } from '@/styles/index';
import { Title, Span, Icon } from '@/components/atoms';
import { Loading } from '@/components/molcules';
import { KAKAO_KEY } from '@/constants/index';

const MainContainer = styled.main`
  ${Layout.flexColCenter};
  width: 100%;
  max-width: 600px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  background-image: url('https://gloomy-static-image.s3.ap-northeast-2.amazonaws.com/intro_background_image.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const TextArea = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
  margin-bottom: 30%;
  padding-left: 35px;
  box-sizing: border-box;
`;

const LoginButtonArea = styled.div`
  ${Layout.flexRowCenter};
  position: fixed;
  bottom: 35px;
  left: 50%;
  width: calc(100% - 34px);
  max-width: 566px;
  height: 47px;
  background-color: ${({ theme }) => theme.KAKAO_YELLOW};
  border-radius: 10px;
  transform: translateX(-50%);
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

  const kakaoLoign = () => {
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
        <Title size="h3" style={{ lineHeight: 1.5 }}>
          {'감정이'}
          <br/> {'말랑해지는 순간을'}
          <br/>
          <Span style={{ fontWeight: 700, fontSize: '20px' }}>{'그루밍'}</Span>
          {'에서 경험하세요'}
        </Title>
      </TextArea>
      <LoginButtonArea onClick={kakaoLoign}>
        <Icon.Kakao style={{ position: 'absolute', left: '18px' }} height={'39px'}/>
        <Span style={{ color: COLOR.BLACK, fontSize: '13px', display: 'block', width: '100%', textAlign: 'center' }}>{'카카오로 이용하기'}</Span>
      </LoginButtonArea>
      {isLoading ? <></> : <Loading/>}
    </MainContainer>
  );
}
