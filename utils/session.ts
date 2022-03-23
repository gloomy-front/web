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

    // if (refreshToken && accessToken) {
    //   const { result } = await fetcherSSR<IReissueLoginResponse>({
    //     method: 'POST',
    //     url: `${API_URL}/jwt/reissue`,
    //     ctx,
    //   })({ accessToken, refreshToken });
    //   console.log(result);
    //   if (result?.refreshToken && result?.accessToken) {
    //     const expireDate = getExpiresDate(30);
    //
    //     ctx.res.setHeader('set-Cookie',
    //       [`${GLOOMY_REFRESH_TOKEN}=${result?.refreshToken ?? ''}; path=/; expires=${expireDate}; sameSite=lax;`,
    //         `${GLOOMY_TOKEN}=${result?.accessToken ?? ''}; path=/; expires=${expireDate}; sameSite=lax;`]);
    //   } else {
    //     const expireDate = getExpiresDate(-1);
    //
    //     ctx.res.setHeader('set-Cookie',
    //       [`${GLOOMY_REFRESH_TOKEN}=''; path=/; expires=${expireDate}; sameSite=lax;`,
    //         `${GLOOMY_TOKEN}=''; path=/; expires=${expireDate}; sameSite=lax;`]);
    //
    //     return {
    //       redirect: {
    //         destination: '/kakao/login',
    //         permanent: false
    //       }
    //     };
    //   }
    // }

    return handler({ ...ctx });
  };
};
