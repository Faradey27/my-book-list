const METRICS = require('pwmetrics/lib/metrics');

module.exports = {
  url: 'http://localhost:5000',
  flags: { // AKA feature flags
    runs: 3, // number or runs
    expectations: true, // turn on assertion metrics results against provides values
    json: true, // not required, set to true if you want json output
    outputPath: 'stdout', // not required, only needed if you have specified json output, can be "stdout" or a path
    chromeFlags: '--headless', // custom flags to pass to Chrome. For a full list of flags, see http://peter.sh/experiments/chromium-command-line-switches/.
    // Note: pwmetrics supports all flags from Lighthouse
    showOutput: true, // not required, set to false for pwmetrics not output any console.log messages
    failOnError: true // not required, set to true if you want to fail the process on expectations errors
  },
  expectations: {
    [METRICS.TTFCP]: {
      warn: '>=1300',
      error: '>=1400'
    },
    [METRICS.TTFMP]: {
      warn: '>=1300',
      error: '>=1400'
    },
    [METRICS.TTI]: {
      warn: '>=1300',
      error: '>=1400'
    },
    [METRICS.TTFCPUIDLE]: {
      warn: '>=1300',
      error: '>=1400'
    },
    [METRICS.SI]: {
      warn: '>=1300',
      error: '>=1400'
    },
  }
}
