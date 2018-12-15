import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { getSiteUrl, waiter } from './e2e-helpers';

const devices = require('puppeteer/DeviceDescriptors');

class Browser {
  private browser?: puppeteer.Browser;
  private page?: puppeteer.Page;

  public launch = async () => {
    this.browser = await puppeteer.launch({
      args: [
        '--allow-insecure-localhost',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-popup-blocking',
        '--media-cache-size=0',
        '--disk-cache-size=',
      ],
      headless: process.env.HEADLESS !== 'false',
    });
    this.page = await this.browser.newPage();
  };

  public close = () => this.browser && this.browser.close();

  public saveScreenshot = async ({ name }: {name: string}) => {
    await waiter();
    const formatedName = name.replace(/\s+/g, '_');
    const pathToScreenshotsDir = path.join(__dirname, '__screenshots__');

    if (!fs.existsSync(pathToScreenshotsDir)) {
      fs.mkdirSync(pathToScreenshotsDir);
    }

    if (!this.page) {
      throw new Error('Page object was missed');
    }

    await this.page.screenshot({
      path: path.join(pathToScreenshotsDir, `${formatedName}.png`),
      type: 'png',
    });
  }

  public openPage = async (name: string, device = 'iPhone 8') => {
    if (!this.page) {
      throw new Error('Page object was missed');
    }
    await this.page.emulate(devices[device]);
    await this.page.goto(getSiteUrl() + name, {
      waitUntil: 'networkidle0',
    });
  }
  public getPage = () => this.page;
}

export default Browser;
