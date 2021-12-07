describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render text Hello Keleya', async () => {
    await expect(element(by.id('hello_keleya'))).toBeVisible();
  });

  it('should show Woo after tapping Press me', async () => {
    await element(by.id('press_me')).tap();
    await expect(element(by.id('woo'))).toBeVisible();
  });
});
