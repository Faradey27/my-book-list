import compression from 'compression';
import express from 'express';
import next from 'next';
import path from 'path';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: path.join(__dirname, '..') }); // path to .next folder after prod build phase
const handleRoutes = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  if (!dev) {
    server.use(compression());
  }
  server.use(express.static(path.join(__dirname, '../static')));
  // Enable reverse proxy support in Express. This causes the
  // the "X-Forwarded-Proto" header field to be trusted so its
  // value can be used to determine the protocol. See
  // http://expressjs.com/api#app-settings for more details.
  server.enable('trust proxy');

  server.use((req, res) => {
    if (dev) {
      return handleRoutes(req, res);
    }

    if (req.path === '/service-worker.js') {
      const filePath = path.join(__dirname, '../.next', req.path);
      app.serveStatic(req, res, filePath);
    } else {
      handleRoutes(req, res);
    }
  });

  server.listen(port, (err: any) => {
    if (err) {
      throw err;
    }
    console.info(`> Ready on http://localhost:${port}`);
  });
});
