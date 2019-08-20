/* tslint:disable: no-var-requires */

import App, { AppContext } from 'next/app';
import { IntlProvider } from 'react-intl';

import sentry from '../ui-app/utils/sentry';

const { Sentry, captureException } = sentry();

if (!Intl.PluralRules) {
  require('intl-pluralrules');
}

if (!Intl.RelativeTimeFormat) {
  require('@formatjs/intl-relativetimeformat/polyfill');
}

process.on('unhandledRejection', (err: any) => {
  console.error('CRITICAL SERVER ERROR', err); // tslint:disable-line
  captureException(err, { req: {} });
});

process.on('uncaughtException', err => {
  console.error('CRITICAL SERVER ERROR', err); // tslint:disable-line
  captureException(err, { req: {} });
});

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<any> {
    try {
      let pageProps = {};

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      return { pageProps };
    } catch (error) {
      // Capture errors that happen during a page's getInitialProps.
      // This will work on both client and server sides.
      const errorEventId = captureException(error, ctx);
      return {
        hasError: true,
        errorEventId,
      };
    }
  }

  static getDerivedStateFromProps(props: any, state: any) {
    // If there was an error generated within getInitialProps, and we haven't
    // yet seen an error, we add it to this.state here
    return {
      hasError: props.hasError || state.hasError || false,
      errorEventId: props.errorEventId || state.errorEventId || undefined,
    };
  }

  static getDerivedStateFromError() {
    // React Error Boundary here allows us to set state flagging the error (and
    // later render a fallback UI).
    return { hasError: true };
  }

  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      hasError: false,
      errorEventId: undefined,
    };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    const errorEventId = captureException(error, { errorInfo });

    // Store the event id at this point as we don't have access to it within
    // `getDerivedStateFromError`.
    this.setState({ errorEventId });
  }

  render() {
    return (
      <IntlProvider locale="en">
        {(this.state as any).hasError ? (
          <section>
            <h1>There was an error!</h1>
            <p>
              <a
                href="#"
                onClick={() =>
                  (Sentry as any).showReportDialog({
                    eventId: (this.state as any).errorEventId,
                  })
                }
              >
                📣 Report this error
              </a>
            </p>
            <p>
              <a
                href="#"
                onClick={() => {
                  window.location.reload(true);
                }}
              >
                Or, try reloading the page
              </a>
            </p>
          </section>
        ) : (
          // Render the normal Next.js page
          super.render()
        )}
      </IntlProvider>
    );
  }
}

export default MyApp;
