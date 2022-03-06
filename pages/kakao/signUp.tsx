import React from 'react';
import { GetServerSideProps } from 'next';

import { API_URL, GLOOMY_TOKEN, GLOOMY_REFRESH_TOKEN, SITE_URL } from '@/constants/index';
import { fetcherSSR, getExpiresDate } from '@/utils/index';

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
  const { query: { code }} = ctx;
  const data = { code, redirect_uri: `${SITE_URL}/kakao/signUp` };

  const { result } = await fetcherSSR<IKakaoLoginResponse>({
    method: 'POST',
    url: `${API_URL}/kakao/signUp`,
    ctx,
  })(data);

  if (result?.refreshToken && result?.accessToken) {
    const expireDate = getExpiresDate(30);

    ctx.res.setHeader('set-Cookie',
      [`${GLOOMY_REFRESH_TOKEN}=${result?.refreshToken ?? ''}; path=/; expires=${expireDate}; sameSite=lax;`,
        `${GLOOMY_TOKEN}=${result?.accessToken ?? ''}; path=/; expires=${expireDate}; sameSite=lax;`]);

    return {
      redirect: {
        destination: '/community',
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: '/kakao/login',
      permanent: false,
    }
  };
};
