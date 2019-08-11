import withSourceMaps from '@zeit/next-source-maps';

export default withSourceMaps({
  env: {
    SENTRY_DNS: process.env.SENTRY_DNS,
  },
  webpack(config: any) {
    return config;
  },
});
