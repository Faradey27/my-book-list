import RootDriver from './Root.driver';

describe('Root Page', () => {
  let driver: RootDriver;

  beforeEach(() => {
    driver = new RootDriver();
  });

  it('should render correctly', () => {
    driver.when.created();
    expect(driver.is.ok()).toBeTruthy();
  });
});
