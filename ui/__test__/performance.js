const exec = require('./exec');

const run = async () => {
  const processForStartedServer = exec('./node_modules/.bin/serve -s build');
  try {
    await exec('npm run test:performance');
    await exec('./node_modules/.bin/kill-port 5000');

    console.info('SUCCESS');
    process.exit(0);
  } catch (e) {
    await exec('./node_modules/.bin/kill-port 5000');

    console.error('ERROR');
    process.exit(1);
  }
}

run();
