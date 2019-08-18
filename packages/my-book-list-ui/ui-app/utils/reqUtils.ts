export const getOrigin = (req?: any) => {
  const host = req ? req.headers.host : window.location.host;
  const protocol = host.indexOf('localhost') > -1 ? 'http:' : 'https:';
  return `${protocol}//${host}`;
};
