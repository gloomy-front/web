import React from 'react';
import { GetServerSideProps } from 'next';

import { API_URL, GLOOMY_TOKEN, GLOOMY_REFRESH_TOKEN } from '@/constants/index';
import { fetcherSSR } from '@/utils/ssrFetcher';

interface IKakaoLoginResponse {
  id: number;
  email: string;
  username: string;
  accessToken: string;
  refreshToken: string;
}

export default function signUpPage(): JSX.Element {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: { code },
    req: { headers },
  } = ctx;
  const protocol = headers.referer?.split('://')[0];
  const { host } = headers;
  const data = {
    code,
    redirect_uri: `${protocol}://${host}/kakao/signUp`,
  };

  const {
    code: statusCode,
    result,
    message,
  } = await fetcherSSR<IKakaoLoginResponse>({
    method: 'POST',
    url: `${API_URL}/kakao/signUp`,
    ctx,
  })(data);

  if (statusCode !== 200) {
    return {
      redirect: {
        destination: `/kakao/login?error=${message}`,
        permanent: false,
      },
    };
  }

  ctx.res.setHeader(
    'set-Cookie',
    `${GLOOMY_TOKEN}=${result.accessToken ?? ''}; path=/; ${GLOOMY_REFRESH_TOKEN}=${
      result.refreshToken ?? ''
    }; Expires=Wed; Secure; HttpOnly; SameSite=Strict`,
  );

  return {
    redirect: {
      destination: '/community',
      permanent: false,
    },
  };
};
