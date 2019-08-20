
module.exports = {
    launch: {
        ignoreHTTPSErrors: true,
        //args: ['--disable-dev-shm-usage'],
        headless: process.env.CI === 'true',
        executablePath: 'D:\\wangxiao\\chrome-7\\puppeteer\\.local-chromium\\win64-594312\\chrome-win\\chrome.exe'
    },
};