import React from 'react';
import { GetServerSideProps } from 'next';

import { LoginTemplate } from '@/components/templates';
import { GLOOMY_TOKEN } from '@/constants/index';

export default function LoginPage() {
  return <LoginTemplate/>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const authToken = ctx.req.cookies[GLOOMY_TOKEN];

  if (authToken) {
    return {
      redirect: {
        destination: '/community',
        permanent: false,
      },
    };
  }

  return {
    props: {}
  };
};
