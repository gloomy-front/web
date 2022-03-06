import React from 'react';

import { CommunityTemplate } from '@/components/templates';
import { withSession } from '@/utils/session';

export default function CommunityPage(): JSX.Element {
  return (
    <CommunityTemplate/>
  );
}

export const getServerSideProps = withSession(async (ctx) => {
  return {
    props: {}
  };
});