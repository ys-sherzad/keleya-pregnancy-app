import { takeScreenshot } from './helpers';

describe('Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  afterEach(async () => {
    takeScreenshot();
  });

  it('should show Hello Keleya text', async () => {
    await expect(element(by.id('hello_keleya'))).toBeVisible();
  });

  it('should show a woo after tap on button', async () => {
    await element(by.id('press_me')).tap();
    await expect(element(by.id('woo'))).toBeVisible();
  });

});
