import { Suspense, ComponentProps } from 'react';
import { useMounted } from '@/hooks/index';

export default function SSRSafeSuspense(props: ComponentProps<typeof Suspense>) {
  const { mounted } = useMounted();

  if (mounted) {
    return <Suspense {...props} />;
  }
  return <>{props.fallback}</>;
}
