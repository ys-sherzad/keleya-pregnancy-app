const { execSync } = require('child_process');
const { existsSync, mkdirSync } = require('fs');

const SCREENSHOT_DIR = './e2e/screenshots';

const SCREENSHOT_OPTIONS = {
    timeout: 10000,
    killSignal: 'SIGKILL',
};

let screenshotIndex = 0;

export const takeScreenshot = () => {
    // Create screenshot directory if it doesn't exist
    if (!existsSync(SCREENSHOT_DIR)) mkdirSync(SCREENSHOT_DIR);

    if (device.getPlatform() === 'ios') _takeScreenshotIOS();
    if (device.getPlatform() === 'android') _takeScreenshotAndroid();
};

/**
 * Create a screenshot on iOS
 */
const _takeScreenshotIOS = () => {
    const screenshotFilename = `${SCREENSHOT_DIR}/screenshot-${screenshotIndex++}.png`;
    execSync(`xcrun simctl io booted screenshot ${screenshotFilename}`, SCREENSHOT_OPTIONS);
};

/**
 * Create a screenshot on Android
 */
const _takeScreenshotAndroid = () => {
    const filename = `screenshot-${screenshotIndex++}.png`;
    const pathToSave = `${SCREENSHOT_DIR}/${filename}`;

    execSync(`adb shell screencap /sdcard/${filename}`, SCREENSHOT_OPTIONS);
    execSync(`adb pull /sdcard/${filename} ${pathToSave}`, SCREENSHOT_OPTIONS);

    // Remove screenshot from device
    execSync(`adb shell rm /sdcard/${filename}`, SCREENSHOT_OPTIONS);
};

export const checkIfVisible = (elementId) => {
    return waitFor(element(by.id(elementId))).toBeVisible();
};

export const waitAndTap = async (elementId) => {
    await waitFor(element(by.id(elementId))).toBeVisible();

    return element(by.id(elementId)).tap();
};