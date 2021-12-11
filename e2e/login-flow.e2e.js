import * as Helpers from './helpers';


describe('Testing Sign in Workflow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // afterEach(async () => {
  //   takeScreenshot();
  // });

  it('Should show "Initial Screen"', async () => {
    await Helpers.checkIfVisible('initial_screen');
  });


  it('Should go to "Sign in" screen when tapping on "login" button', async () => {
    await Helpers.waitAndTap('login');
    await Helpers.checkIfVisible('sign_in_screen');
  });

});
