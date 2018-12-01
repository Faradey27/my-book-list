const { setup: setupDevServer } = require('jest-dev-server');

module.exports = async function globalSetup() {
  if (process.env.SKIP_SERVER_START) {
    return;
  }
  await setupDevServer({
    launchTimeout: 90000,
    command: 'npm run start',
    port: 3000,
    usedPortAction: 'ignore',
  });
};
