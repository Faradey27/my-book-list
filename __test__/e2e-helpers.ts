export const getSiteUrl = () => 'http://localhost:3000';

export const waiter = (delay = 400) =>
  new Promise((resolve) => setTimeout(() => resolve(), delay));
