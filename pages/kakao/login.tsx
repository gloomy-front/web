import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { LoginTemplate } from '@/components/templates';

export interface LoginProps {
  error: string;
}
export default function LoginPage({ error }: InferGetServerSidePropsType<LoginProps>): JSX.Element {
  return <LoginTemplate error={error} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { error } = ctx.query;
  return {
    props: { error: error ?? null },
  };
};
