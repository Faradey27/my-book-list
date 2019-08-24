import { useEffect, useReducer } from 'react';

import { IncomingMessage } from 'http';
import { NextPageContext } from 'next';

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

const withDataLoader = (getTriggers: (props: any) => string[] = () => []) => (
  loader: (req: IncomingMessage | null, props: any) => Promise<any>,
  defaultPayload?: any,
  maxSSRWaitTime: number = 2000
) => <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & IWithDataLoadingProps> => {
  const Loader = (props: IWithDataLoadingProps) => {
    const [state, dispatch] = useReducer<LoaderReducer>(loaderReducer, props);

    useEffect(() => {
      if (props.state === States.loading) {
        loader(null, props)
          .then(payload => {
            dispatch({ type: Actions.SET_PAYLOAD, payload });
            dispatch({ type: Actions.SET_STATE, payload: States.success });
          })
          .catch(() =>
            dispatch({ type: Actions.SET_STATE, payload: States.failure })
          );
      }
    }, getTriggers(props));

    return <Component {...(state as P)} />;
  };

  Loader.getInitialProps = async ({ req }: NextPageContext) => {
    const isServer = Boolean(req);
    const props = await new Promise(resolve => {
      if (isServer) {
        loader(req || null, null)
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
