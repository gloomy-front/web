import { Reducer, useCallback, useReducer, useRef } from 'react';
import useSafeCallback from 'use-safe-callback';

type rollbackFn = () => void;

export interface Options<Input, Data, Error> {

  onMutate?(params: {
    input: Input;
  }): Promise<rollbackFn | void> | rollbackFn | void;

  onSuccess?(params: { data: Data; input: Input }): Promise<void> | void;

  onFailure?(params: {
    error: Error;
    rollback: rollbackFn | void;
    input: Input;
  }): Promise<void> | void;

  onSettled?(
    params:
      | { status: 'success'; data: Data; input: Input }
      | {
      status: 'failure';
      error: Error;
      rollback: rollbackFn | void;
      input: Input;
    }
  ): Promise<void> | void;

  throwOnFailure?: boolean;

  useErrorBoundary?: boolean;
}

type Status = 'idle' | 'running' | 'success' | 'failure';

function noop() {}

function useGetLatest<Value>(value: Value): () => Value {
  const ref = useRef<Value>(value);
  ref.current = value;
  return useCallback(() => ref.current, []);
}

export default function useMutation<Input = any, Data = any, Error = any>(
  mutationFn: (input: Input) => Promise<Data>,
  {
    onMutate = () => noop,
    onSuccess = noop,
    onFailure = noop,
    onSettled = noop,
    throwOnFailure = false,
    useErrorBoundary = false,
  }: Options<Input, Data, Error> = {}
) {
  type State = { status: Status; data?: Data; error?: Error };

  type Action =
    | { type: 'RESET' }
    | { type: 'MUTATE' }
    | { type: 'SUCCESS'; data: Data }
    | { type: 'FAILURE'; error: Error };

  const [{ status, data, error }, unsafeDispatch] = useReducer<
    Reducer<State, Action>
    >(
    function reducer(_, action) {
      if (action.type === 'RESET') {
        return { status: 'idle' };
      }
      if (action.type === 'MUTATE') {
        return { status: 'running' };
      }
      if (action.type === 'SUCCESS') {
        return { status: 'success', data: action.data };
      }
      if (action.type === 'FAILURE') {
        return { status: 'failure', error: action.error };
      }
      throw Error('Invalid action');
    },
    { status: 'idle' }
  );

  const getMutationFn = useGetLatest(mutationFn);
  const latestMutation = useRef(0);

  const safeDispatch = useSafeCallback(unsafeDispatch);

  const mutate = useCallback(async function mutate(
    input: Input,
    config: Omit<
      Options<Input, Data, Error>,
      'onMutate' | 'useErrorBoundary'
      > = {}
    ) {
      const mutation = Date.now();
      latestMutation.current = mutation;

      safeDispatch({ type: 'MUTATE' });
      const rollback = (await onMutate({ input })) ?? noop;

      try {
        const data = await getMutationFn()(input);

        if (latestMutation.current === mutation) {
          safeDispatch({ type: 'SUCCESS', data });
        }

        await onSuccess({ data, input });
        await (config.onSuccess ?? noop)({ data, input });

        await onSettled({ status: 'success', data, input });
        await (config.onSettled ?? noop)({ status: 'success', data, input });

        return data;
      } catch (error) {
        // @ts-ignore
        await onFailure({ error, rollback, input });
        // @ts-ignore
        await (config.onFailure ?? noop)({ error, rollback, input });

        // @ts-ignore
        await onSettled({ status: 'failure', error, input, rollback });
        await (config.onSettled ?? noop)({
          status: 'failure',
          // @ts-ignore
          error,
          input,
          rollback,
        });

        if (latestMutation.current === mutation) {
          // @ts-ignore
          safeDispatch({ type: 'FAILURE', error });
        }

        if (config.throwOnFailure ?? throwOnFailure) throw error;

        throw error;
        // return error;
      }
    },
    []);

  const reset = useCallback(function reset() {
    safeDispatch({ type: 'RESET' });
  }, []);

  if (useErrorBoundary && error) throw error;

  return ([mutate, { status, data, error, reset }] as unknown) as [
    typeof mutate,
    {
      status: Status;
      data?: Data;
      error?: Error;
      reset: typeof reset;
    }
  ];
}