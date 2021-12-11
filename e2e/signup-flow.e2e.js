import * as Helpers from './helpers';

describe('Sign up Screen', () => {
    beforeAll(async () => {
        await device.launchApp();
    });


    it('Should show "Initial Screen"', async () => {
        await Helpers.checkIfVisible('initial_screen');
    });


    it('Should go to "Sign In" screen after tapping on "Or login" button', async () => {
        await Helpers.waitAndTap('login');
        await Helpers.checkIfVisible('sign_up_screen');
    });
});
