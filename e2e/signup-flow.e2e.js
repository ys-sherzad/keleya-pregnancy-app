import * as Helpers from './helpers';


describe('Testing Sign up Workflow', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('Should show "Initial Screen"', async () => {
        await Helpers.checkIfVisible('initial_screen');
    });


    it('Should go to "Sign up" screen when tapping on "Get Started" button', async () => {
        await Helpers.waitAndTap('get_started');
        await Helpers.checkIfVisible('sign_up_screen');
    });
});
