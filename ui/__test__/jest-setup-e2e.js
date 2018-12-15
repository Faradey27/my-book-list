const { setup: setupDevServer } = require('jest-dev-server');

module.exports = async function globalSetup() {
  if (process.env.SKIP_SERVER_START) {
    return;
  }
  await setupDevServer({
    launchTimeout: 90000,
    command: 'serve -s build', // you need to build before
    port: 5000,
    usedPortAction: 'ignore',
  });
};
