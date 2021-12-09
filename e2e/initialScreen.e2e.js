import { takeScreenshot } from './helpers';

describe('Initial Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  // afterEach(async () => {
  //   takeScreenshot();
  // });

  it('Should show "Keleya Logo" and description text', async () => {
    await waitFor(element(by.id('keleya_logo'))).toBeVisible();
    await waitFor(element(by.id('description'))).toBeVisible();
  });

  it('Should show background image', async () => {
    await waitFor(element(by.id('background_image'))).toBeVisible();
  });

  it('Should show "Get Started" button', async () => {
    await waitFor(element(by.id('get_started'))).toBeVisible();
  });

  it('Should show "login" button', async () => {
    await waitFor(element(by.id('login'))).toBeVisible();
  });

  it('Should show navigation dots', async () => {
    await waitFor(element(by.id('nav_dots'))).toBeVisible();
  });

});
