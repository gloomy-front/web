import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { COLOR, GlobalStyles } from '@/styles/index';
import { AsyncBoundary } from '@/components/organisms';
import { Loading } from '@/components/molcules';
import CommunityPage from '@/pages/community';

function MyApp({ Component, pageProps }: AppProps) {
  const jsKey = '473b1a6bbe9f9cceeffa8a5a384fae27';

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>그루미</title>
        {/* <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <script>Kakao.init("{jsKey}");</script> */}
        <meta name="description" content="그루미 커뮤니티" />
        <meta name="keywords" content="커뮤니티, 우울" />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="theme-color" content="#f8f8f7" />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
        />

        <meta name="msapplication-TileColor" content="#f8f8f7" />
      </Head>
      <ThemeProvider theme={COLOR}>
        <GlobalStyles />
        <AsyncBoundary pendingFallback={<Loading />} rejectedFallback={<CommunityPage />}>
          <Component {...pageProps} />
        </AsyncBoundary>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
