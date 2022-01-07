import React from 'react';
import { DetailPostTemplate } from '@/components/templates';
import { PageAnimation } from '@/components/molcules';

export default function DetailPostPage(): JSX.Element {
  return (
    <PageAnimation>
      <DetailPostTemplate/>
    </PageAnimation>
  );
}