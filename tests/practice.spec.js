import { test, expect } from "@playwright/test";

test.describe.parallel('Double page Tests', () => {
    test(`Google search test`, async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const page2 = await context.newPage();
        await page.goto('https://google.com');
        await page2.goto('https://bing.com');
       
        await page2.waitForTimeout(10000);
    });


    
});