import { useEffect, useReducer } from 'react';

export enum States {
  idle = 'idle',
  loading = 'loading',
  success = 'success',
  failure = 'failure',
  empty = 'empty',
}

enum Actions {
  SET_PAYLOAD = 'SET_PAYLOAD',
  SET_STATE = 'SET_STATE',
}

interface IWithDataLoadingProps {
  payload: any;
  state: States;
}

interface ILoaderState {
  payload: any;
  state: States;
}

interface ILoaderAction {
  type: States | Actions;
  payload?: any;
}

type LoaderReducer = (
  state: ILoaderState,
  action: ILoaderAction
) => ILoaderState;

const loaderReducer = (state: ILoaderState, action: ILoaderAction) => {
  switch (action.type) {
    case Actions.SET_PAYLOAD:
      return { ...state, payload: action.payload };
    case Actions.SET_STATE:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

const withDataLoader = (
  loader: (req?: any) => Promise<any>,
  defaultPayload?: any,
  maxSSRWaitTime: number = 200
) => <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & IWithDataLoadingProps> => {
  const Loader = (props: IWithDataLoadingProps) => {
    const [state, dispatch] = useReducer<LoaderReducer>(loaderReducer, props);

    useEffect(() => {
      if (props.state === States.loading) {
        loader()
          .then(payload => {
            dispatch({ type: Actions.SET_PAYLOAD, payload });
            dispatch({ type: Actions.SET_STATE, payload: States.success });
          })
          .catch(() =>
            dispatch({ type: Actions.SET_STATE, payload: States.failure })
          );
      }
    }, []);

    return <Component {...(state as P)} />;
  };

  Loader.getInitialProps = async ({ req }: any) => {
    const isServer = Boolean(req);
    const props = await new Promise(resolve => {
      if (isServer) {
        loader(req)
          .then(payload => resolve({ payload, state: States.success }))
          .catch(error =>
            resolve({ error, payload: defaultPayload, state: States.failure })
          );
      }

      setTimeout(
        () => resolve({ payload: defaultPayload, state: States.loading }),
        isServer ? maxSSRWaitTime : 0
      );
    });

    return props;
  };

  return Loader;
};

export default withDataLoader;
