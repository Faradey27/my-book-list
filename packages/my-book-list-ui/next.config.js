const webpack = require('webpack');
const withSourceMaps = require('@zeit/next-source-maps');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withSourceMaps({
    webpack: (config, { isServer, buildId }) => {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env.FIREBASE_API_KEY': JSON.stringify(
            process.env.FIREBASE_API_KEY
          ),
          'process.env.SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
          'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
        })
      );

      if (!isServer) {
        config.resolve.alias['@sentry/node'] = '@sentry/browser';
      }

      return config;
    },
  })
);
