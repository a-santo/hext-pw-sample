import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    //globalSetup: require.resolve('./production.globalSetup'),
    use: {
        baseURL: 'https://hextrust.com',
        browserName: 'chromium'
    },
    testDir: '../e2e/'
};

export default config;