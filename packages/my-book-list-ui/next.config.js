require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

const webpack = require('webpack');
const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps({
  webpack: (config, { isServer, buildId }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
      })
    );

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env.build'),
        systemvars: true,
      }),
    ];

    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return config;
  },
});
