import React from 'react';
import { GetServerSideProps } from 'next';

export default function signUpPage(): JSX.Element {
  return <></>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/community',
      permanent: false,
    },
  };
};