import React from 'react';
import { NewPostTemplate } from '@/components/templates';
import { PageAnimation } from '@/components/molcules';

export default function NewPostPage(): JSX.Element {
  return (
    <PageAnimation>
      <NewPostTemplate/>
    </PageAnimation>
  );
}