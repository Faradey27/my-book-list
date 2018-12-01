import Browser from '../../../../__test__/Browser';
import RootDriver from './Root.e2e.driver';

const browser = new Browser();

describe('Root Page', () => {
  beforeAll(browser.launch);
  afterAll(browser.close);

  let driver: RootDriver;

  beforeEach(async () => {
    driver = new RootDriver({ browser });
    await driver.when.loaded();
  });

  it('Should show root page', async () => {
    expect(await driver.is.ok()).toBeTruthy();
  });
});
