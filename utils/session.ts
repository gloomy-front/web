import { GetServerSidePropsContext, GetServerSideProps } from 'next';
import { API_URL, GLOOMY_REFRESH_TOKEN, GLOOMY_TOKEN } from '@/constants/index';
import { getExpiresDate, fetcherSSR } from '@/utils/index';

interface IReissueLoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const withSession = (handler: GetServerSideProps) => {
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;
    const accessToken = req.cookies[GLOOMY_TOKEN];
    const refreshToken = req.cookies[GLOOMY_REFRESH_TOKEN];

    if (!refreshToken || !accessToken) {
      return {
        redirect: {
          destination: '/kakao/login',
          permanent: false
        }
      };
    }

    if (refreshToken && accessToken) {
      const { result } = await fetcherSSR<IReissueLoginResponse>({
        method: 'POST',
        url: `${API_URL}/jwt/reissue`,
        ctx,
      })({ accessToken, refreshToken });

      if (result?.refreshToken && result?.accessToken) {
        const expireDate = getExpiresDate(30);
        console.log(result);
        ctx.res.setHeader('set-Cookie',
          [`${GLOOMY_REFRESH_TOKEN}=${result?.refreshToken ?? ''}; path=/; expires=${expireDate}; sameSite=lax;`,
            `${GLOOMY_TOKEN}=${result?.accessToken ?? ''}; path=/; expires=${expireDate}; sameSite=lax;`]);
      } else {
        return {
          redirect: {
            destination: '/kakao/login',
            permanent: false
          }
        }
      }
    }

    return handler({ ...ctx });
  };
};