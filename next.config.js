const webpack = require('webpack');

const withTypescript = require('@zeit/next-typescript');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const config = withTypescript({
  webpack(config) {
    if (process.env.ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }));
    }
    config.plugins.push(new ProgressBarPlugin());
    config.plugins.push(new webpack.IgnorePlugin(/__test__/));
    return config;
  },
});

module.exports = config;
