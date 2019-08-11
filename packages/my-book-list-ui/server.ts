import express from 'express';
import next from 'next';

const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler() as any;

app.prepare().then(() => {
  // app.buildId is only available after app.prepare(), hence why we setup here
  const { Sentry } = require('./utils/sentry')(app.buildId);

  express()
    // This attaches request information to Sentry errors
    .use(Sentry.Handlers.requestHandler())
    // Regular next.js request handler
    .use(handler)
    // This handles errors if they are thrown before reaching the app
    .use(Sentry.Handlers.errorHandler())
    .listen(port, (err: Error) => {
      if (err) {
        throw err;
      }

      console.log(`> Ready on http://localhost:${port}`); // tslint:disable-line
    });
});
