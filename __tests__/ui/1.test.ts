import { Page } from 'puppeteer';


describe('ly.com demo cases', () => {
    let page: Page;
    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto('https://www.ly.com/');
    });
    afterEach(async ()=> {
        await page.close();
    })
    test('test-ly-demo', async () => {
        const logo = await page.$eval('.logo', el => el.getAttribute('title'));
        console.log('logo');
        await expect(logo).toEqual('同程旅游');
    });
})


