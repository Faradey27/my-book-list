import Browser from '../../../../__test__/Browser';

export default class HomeDriver {
  constructor({ browser }: { browser: Browser } ) {
    this.browser = browser;
  }

  private browser: Browser;

  public when = {
    loaded: async () => {
      await this.browser.openPage('/');
      return this;
    },
  };

  public is = {
    ok: () => {
      const page = this.browser && this.browser.getPage();
      return page && page.waitForSelector('[data-testid="root"]');
    }
  };
}
