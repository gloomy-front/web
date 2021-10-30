import { ComponentProps, CSSProperties, ReactNode, useState } from 'react';
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
  rejectedFallback?: ErrorBoundaryProps['fallback'];
  isRefresh?: boolean;
  style?: CSSProperties;
  onError?: (error: Error, info: { componentStack: string }) => void;
  children?: ReactNode;
}

const RefreshButton = ({
                         dispatch,
                         style
                       }: {
  dispatch: (flag: boolean) => void;
  style?: CSSProperties;
}): JSX.Element => {
  return (
    <ButtonSection style={style}>
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
                         style,
                         onError,
                         children,
                         ...errorBoundaryProps
                       }: Props): JSX.Element {
  const [refresh, setRefresh] = useState<boolean>(false);
  return (
    <ErrorBoundary
      fallback={rejectedFallback}
      resetKeys={[refresh]}
      onError={(error, info) => {
        isRefresh && setRefresh(true);
        onError && onError(error, info);
      }}
      {...errorBoundaryProps}
    >
      <SSRSafeSuspense fallback={pendingFallback}>
        {!refresh ? children : <RefreshButton dispatch={(flag) => setRefresh(flag)} style={style} />}
      </SSRSafeSuspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
