import * as React from 'react';

const changedArray = (prevArray: Array<unknown> = [], nextArray: Array<unknown> = []) =>
  prevArray.length !== nextArray.length || prevArray.some((item, index) => !Object.is(item, nextArray[index]));

interface FallbackProps {
  error: Error;
  resetErrorBoundary: (...args: Array<unknown>) => void;
}

declare function FallbackRender(
  props: FallbackProps,
): React.ReactElement<
  unknown,
  string | React.FunctionComponent | typeof React.Component
  > | null

interface ErrorBoundaryProps {
  onResetKeysChange?: (prevResetKeys: Array<unknown> | undefined, resetKeys: Array<unknown> | undefined) => void;
  onReset?: (...args: Array<unknown>) => void;
  onError?: (error: Error, info: { componentStack: string }) => void;
  resetKeys?: Array<unknown>;
  fallbackRender?: typeof FallbackRender
}

type ErrorBoundaryState = { error: Error | null };

const initialState: ErrorBoundaryState = { error: null };

class ErrorBoundary extends React.Component<
  React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>,
  ErrorBoundaryState
  > {
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  state = initialState;
  updatedWithError = false;
  resetErrorBoundary = (...args: Array<unknown>) => {
    this.props.onReset?.(...args);
    this.reset();
  };

  reset() {
    this.updatedWithError = false;
    this.setState(initialState);
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.props.onError?.(error, info);
  }

  componentDidMount() {
    const { error } = this.state;

    if (error !== null) {
      this.updatedWithError = true;
    }
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    const { error } = this.state;
    const { resetKeys } = this.props;

    if (error !== null && !this.updatedWithError) {
      this.updatedWithError = true;
      return;
    }

    if (error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
      this.props.onResetKeysChange?.(prevProps.resetKeys, resetKeys);
      this.reset();
    }
  }

  render() {
    const { error } = this.state;

    const { fallbackRender } = this.props;

    if (error !== null) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };
      if (typeof fallbackRender === 'function') {
        if (process.env.NODE_ENV === 'development') {
          return;
        }
        return fallbackRender(props);
      }
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
export type {
  FallbackProps,
  ErrorBoundaryProps
};
