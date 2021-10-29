import { ComponentProps, useState } from 'react';
import styled from 'styled-components';

import { Layout } from '@/styles/index';
import { ErrorBoundary } from './ErrorBoundary';
import SSRSafeSuspense from './SSRSafeSuspense';

const ButtonSection = styled.div`
  ${Layout.flexColCenter};
  width: 100%;
`;

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

interface Props extends Omit<ErrorBoundaryProps, 'renderFallback'> {
  pendingFallback: ComponentProps<typeof SSRSafeSuspense>['fallback'];
  rejectedFallback?: ErrorBoundaryProps['fallbackRender'];
  isRefresh?: boolean;
  height?: string;
  onError?: (error: Error, info: { componentStack: string }) => void;
}

const RefreshButton = ({
                         dispatch,
                         height
                       }: {
  dispatch: (flag: boolean) => void;
  height?: string | number;
}): JSX.Element => {
  return (
    <ButtonSection style={{ height: height }}>
      <button
        style={{ padding: '5px' }}
        onClick={() => {
          dispatch(true);
          setTimeout(() => {
            dispatch(false);
          }, 0);
        }}
      >
        {'새로고침'}
      </button>
    </ButtonSection>
  );
};


function AsyncBoundary({
                         pendingFallback,
                         rejectedFallback,
                         isRefresh,
                         height,
                         onError,
                         children,
                         ...errorBoundaryProps
                       }: Props): JSX.Element {
  const [refresh, setRefresh] = useState<boolean>(false);
  return (
    <ErrorBoundary
      fallbackRender={rejectedFallback}
      resetKeys={[refresh]}
      onError={(error, info) => {
        isRefresh && setRefresh(true);
        onError && onError(error, info);
      }}
      {...errorBoundaryProps}
    >
      <SSRSafeSuspense fallback={pendingFallback}>
        {!refresh ? children : <RefreshButton dispatch={(flag) => setRefresh(flag)} height={height} />}
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
